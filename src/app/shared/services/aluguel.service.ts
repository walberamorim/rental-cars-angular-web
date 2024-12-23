import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultadoListagemAluguel } from '../../feature/relatorio/models/resultadoListagemAluguel';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {

constructor(public http: HttpClient) { }


  public listarAlugueis(){
    return this.http.get<ResultadoListagemAluguel>("http://localhost:8080/api/alugueis");
  } 
}
