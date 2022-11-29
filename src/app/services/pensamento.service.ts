import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pensamento } from '../componentes/pensamentos/pensamento/pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {


  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.httpClient.get<Pensamento[]>(this.API)
  }

   criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.httpClient.post<Pensamento>(this.API, pensamento)
  }

  excluir(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.httpClient.delete<Pensamento>(url) 
  }

  buscaId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.httpClient.get<Pensamento>(url)
  }

  editarPensamento(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.httpClient.put<Pensamento>(url, pensamento)

  }
}
