import { Component, OnInit } from '@angular/core';
import { VendaService } from '../services/venda.service';
import { Voo } from '../models/voo.model';
import { Venda } from '../models/venda.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-favoritos-lista',
  templateUrl: './favoritos-lista.component.html',
  styleUrls: ['./favoritos-lista.component.css']
})
export class FavoritosListaComponent implements OnInit {

  voos: Voo[] = [];
  constructor(private vendaService: VendaService,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.voos = this.vendaService.favoritos;
  }

  confirmarCompra(){
    if(this.clienteService.cliente == undefined){
      return;
      alert("Favor cadastrar ou logar no sistema");
    } else {
    let vendas: Venda[] = [];
      this.voos.forEach(voo => {
        let venda: Venda = new Venda();
        venda.cliente = this.clienteService.cliente;
        venda.momentoDaCompra = new Date();
        venda.voo = voo;
        vendas.push(venda);
      });

      this.vendaService.comprar(vendas).subscribe(()=>{
        alert("Obrigado por comprar no Aereo Airlines.");
      })
    }
  }
}
