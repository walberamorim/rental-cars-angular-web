import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { AluguelService } from '../../../../shared/services/aluguel.service';
import { ResultadoListagemAluguel } from '../../models/resultadoListagemAluguel';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig, SortEvent } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Aluguel } from '../../models/aluguel';
import { formatDate, registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@Component({
  selector: 'app-consulta-relatorio',
  templateUrl: './consulta-relatorio.component.html',
  styleUrls: ['./consulta-relatorio.component.css'],
  standalone: true,
  imports: [TableModule, HttpClientModule, TagModule, DropdownModule, CalendarModule, FormsModule, FloatLabelModule],
  providers: [AluguelService]
})
export class ConsultaRelatorioComponent implements OnInit {
  lista: Aluguel[] = [];
  listaTabela: Aluguel[] = [];
  valorTotal: string = '0';
  listaModeloCarro: Modelo[] | undefined = [{ name: 'Todos' }, { name: 'GOL' }, { name: 'RAV4' }, { name: 'UNO' }];
  modeloSelecionado: Modelo | undefined = { name: 'Todos' };
  dataAluguelSelecionada: any = null;
  isSorted: any = null;
  private aluguelService = inject(AluguelService);
  constructor(private config: PrimeNGConfig) { }

  ngOnInit() {

    this.config.setTranslation({
      apply: 'Aplicar',
      clear: 'Limpar',
      accept: 'Sim',
      reject: 'Não',
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: 'Hoje'
    });

    this.aluguelService.listarAlugueis().subscribe({
      next: (result: ResultadoListagemAluguel) => {
        this.lista = result.lista || [];
        this.valorTotal = result.valorTotalNaoPago || '0';
        this.filtrarLista();
        this.filtroModeloLista();
      }
    });
  }

  filtrarLista(): void {
    this.listaTabela = this.lista;
    if (this.modeloSelecionado?.name != 'Todos' && this.modeloSelecionado != undefined) {
      this.listaTabela = this.lista.filter(item => item.modelo === this.modeloSelecionado?.name);
    }
    if (this.dataAluguelSelecionada) {
      this.listaTabela = this.lista.filter(item => item.dataAluguel === formatDate(this.dataAluguelSelecionada, 'dd/MM/yyyy', 'pt-BR'));
    }
  }

  onChangeFiltro(event: any) {
    this.filtrarLista();
  }

  filtroModeloLista():void{
    this.listaModeloCarro = [{ name: 'Todos' }];
    this.lista.forEach(item => {
      if(!this.listaModeloCarro?.find(modelo => modelo.name == item.modelo)){
        this.listaModeloCarro?.push({ name: item.modelo || '' });
      }
    });

  }

  customSort(event: SortEvent) {
    if (this.isSorted == null || this.isSorted === undefined) {
        this.isSorted = true;
        this.sortTableData(event);
    } else if (this.isSorted == true) {
        this.isSorted = false;
        this.sortTableData(event);
    } else if (this.isSorted == false) {
        this.isSorted = true;
        this.sortTableData(event);
    }
}

sortTableData(event:any) {
    event.data.sort((data1: any, data2: any) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (event.field.includes("data")){
          result = this.convertStringToDate(value1).getTime() < this.convertStringToDate(value2).getTime() ? -1 : this.convertStringToDate(value1).getTime() > this.convertStringToDate(value2).getTime() ? 1 : 0;
        }
        else if (event.field.includes("valor")) {
          result = Number(value1) < Number(value2) ? -1 : Number(value1) > Number(value2) ? 1 : 0;
        }
        else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

        return event.order * result;
    });
}

convertStringToDate(string: string): Date{
  let dateParts: string[] = string.split("/");
  return new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
}

}

interface Modelo {
  name: string;
}
