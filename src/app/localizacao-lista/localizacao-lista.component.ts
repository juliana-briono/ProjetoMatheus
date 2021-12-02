import { Component, OnInit } from '@angular/core';
import { Localidade } from '../models/localidade.model';
import { LocalidadeService } from '../services/localidade.service';

@Component({
  selector: 'app-localizacao-lista',
  templateUrl: './localizacao-lista.component.html',
  styleUrls: ['./localizacao-lista.component.css']
})
export class LocalizacaoListaComponent implements OnInit {

  localidades: Localidade[]=[];
  constructor(private localidadeService: LocalidadeService) { }

  ngOnInit(): void {
    this.localidadeService.get().subscribe((localidades: Localidade[])=>{
      this.localidades = localidades;
    })
  }

}
