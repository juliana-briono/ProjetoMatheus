import { Component, OnInit } from '@angular/core';
import { VooService } from '../services/voo.service';
import { Voo } from '../models/voo.model';
import { VendaService } from '../services/venda.service';
import { UsuarioMasterService } from '../services/usuario-master.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  voos: Voo[] = [];
  
  constructor(private vooService: VooService,
    private vendaService: VendaService,
    ) { }

  ngOnInit(): void {
    this.vooService.get().subscribe((voos:Voo[])=>{
      this.voos = voos;
    })
  }

  incluirNoCarrinho(voo: Voo){
    this.vendaService.carrinho.push(voo);
    alert(`Voo de ${voo.origem.nome} para ${voo.destino.nome} adicionado com sucesso.`);
  }
}
