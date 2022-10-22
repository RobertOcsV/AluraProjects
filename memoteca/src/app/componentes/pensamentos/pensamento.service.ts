import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {

        const httpOptions = {   headers: new HttpHeaders({ 'Content-Type':  'application/json' }) };
        var retorno = this.http.post<Pensamento>(this.API, pensamento, httpOptions);
        return retorno;


    }



}
