import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Localidade } from '../models/localidade.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalidadeService {

  constructor(private http: HttpClient) { }

  post(localidade: Localidade){
    return this.http.post<Localidade>(`${environment.baseApiUrl}/localidade`, localidade);
  }

  put(localidade: Localidade){
    return this.http.put<Localidade>(`${environment.baseApiUrl}/localidade`, localidade);
  }

  getPeloId(id: number){
    return this.http.get<Localidade>(`${environment.baseApiUrl}/localidade/${id}`);
  }

  get(){
    return this.http.get<Localidade[]>(`${environment.baseApiUrl}/localidade`);
  }
}
