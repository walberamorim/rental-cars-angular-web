import { Component, OnInit } from '@angular/core';
import { TitleContentComponent } from '../../shared/components/title-content/title-content.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConsultaRelatorioComponent } from './componentes/consulta-relatorio/consulta-relatorio.component';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css'],
  imports: [ButtonModule, TitleContentComponent, TableModule, ConsultaRelatorioComponent],
  standalone: true
})
export class RelatorioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
