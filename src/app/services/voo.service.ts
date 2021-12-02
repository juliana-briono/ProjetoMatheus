import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voo } from '../models/voo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VooService {

  constructor(private http: HttpClient) { }

  post(voo: Voo){
    return this.http.post<Voo>(`${environment.baseApiUrl}/voo`, voo);
  }

  put(voo: Voo){
    return this.http.put<Voo>(`${environment.baseApiUrl}/voo`, voo);
  }

  getPeloId(id: number){
    return this.http.get<Voo>(`${environment.baseApiUrl}/voo/${id}`);
  }

  get(){
    return this.http.get<Voo[]>(`${environment.baseApiUrl}/voo`);
  }
}
