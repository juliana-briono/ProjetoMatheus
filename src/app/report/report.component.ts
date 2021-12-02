import { Component, OnInit } from '@angular/core';
import { VendaService } from '../services/venda.service';
import { Venda } from '../models/venda.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  vendas: Venda[] = [];
  constructor(private vendaService: VendaService) { }

  ngOnInit(): void {
    this.vendaService.get().subscribe((vendas: Venda[])=>{
      this.vendas = vendas;
    })
  }

  Soma(){
    let total:number = 0;
    this.vendas.forEach(venda => {
      total += venda.voo.valor;
    });
    return total;
  }
}
