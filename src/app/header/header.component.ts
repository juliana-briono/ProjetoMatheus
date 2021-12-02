import { Component, OnInit } from '@angular/core';
import { UsuarioMasterService } from '../services/usuario-master.service';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usuarioMasterService: UsuarioMasterService,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
  }


  masterEstaLogado(){
    return this.usuarioMasterService.usuarioLogado != undefined;
  }

  clienteEstaLogado(){
    return this.clienteService.cliente != undefined;
  }

  nomeUsuaio(){
    if(this.usuarioMasterService.usuarioLogado != null)
      return this.usuarioMasterService.usuarioLogado.nome;
    else return this.clienteService.cliente.nome;
  }
}
