import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Promocao } from '../types/types';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  private apiUrl: string = environment.apiUrl

  constructor(private httpClient: HttpClient) {  }

  listar() : Observable <Promocao[]> {
    return this.httpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`)
  }
}
