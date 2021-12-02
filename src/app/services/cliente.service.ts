import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente: Cliente;
  constructor(private http: HttpClient) { }

  post(cliente: Cliente){
    return this.http.post<Cliente>(`${environment.baseApiUrl}/cliente`, cliente);
  }

  login(cliente: Cliente){
    return this.http.post<Cliente>(`${environment.baseApiUrl}/cliente/login`, cliente);
  }

  put(cliente: Cliente){
    return this.http.put<Cliente>(`${environment.baseApiUrl}/cliente`, cliente);
  }

  getPeloId(id: number){
    return this.http.get<Cliente>(`${environment.baseApiUrl}/cliente/${id}`);
  }

  get(){
    return this.http.get<Cliente[]>(`${environment.baseApiUrl}/cliente`);
  }
}
