import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioMaster } from '../models/usuario-master.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioMasterService {

  usuarioLogado: UsuarioMaster;
  constructor(private http: HttpClient) { }

  post(usuarioMaster: UsuarioMaster){
    return this.http.post<UsuarioMaster>(`${environment.baseApiUrl}/usuarioMaster`, usuarioMaster);
  }

  login(usuarioMaster: UsuarioMaster){
    return this.http.post<UsuarioMaster>(`${environment.baseApiUrl}/usuarioMaster/login`, usuarioMaster);
  }

  put(usuarioMaster: UsuarioMaster){
    return this.http.put<UsuarioMaster>(`${environment.baseApiUrl}/usuarioMaster`, usuarioMaster);
  }

  getPeloId(id: number){
    return this.http.get<UsuarioMaster>(`${environment.baseApiUrl}/usuarioMaster/${id}`);
  }

  get(){
    return this.http.get<UsuarioMaster[]>(`${environment.baseApiUrl}/usuarioMaster`);
  }
}
