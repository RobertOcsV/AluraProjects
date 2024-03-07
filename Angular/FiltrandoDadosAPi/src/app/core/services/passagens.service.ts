import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {
  apiUrl : string = environment.apiUrl;
  constructor(private httpClient: HttpClient ) { }

  getPassagens(search: any){
    const params = search;
    return this.httpClient.get(this.apiUrl + '/passagem/search', {params})
  }
}
