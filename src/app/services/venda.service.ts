import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venda } from '../models/venda.model';
import { environment } from 'src/environments/environment';
import { Voo } from '../models/voo.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  carrinho: Voo[] = [];
  constructor(private http: HttpClient) { }

  post(venda: Venda){
    return this.http.post<Venda>(`${environment.baseApiUrl}/venda`, venda);
  }

  put(venda: Venda){
    return this.http.put<Venda>(`${environment.baseApiUrl}/venda`, venda);
  }

  getPeloId(id: number){
    return this.http.get<Venda>(`${environment.baseApiUrl}/venda/${id}`);
  }

  get(){
    return this.http.get<Venda[]>(`${environment.baseApiUrl}/venda`);
  }

  comprar(vendas:Venda[]){
    return this.http.post(`${environment.baseApiUrl}/venda/CompraCarrinho`, vendas);
  }
}
