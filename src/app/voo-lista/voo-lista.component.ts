import { Component, OnInit } from '@angular/core';
import { VooService } from '../services/voo.service';
import { Voo } from '../models/voo.model';

@Component({
  selector: 'app-voo-lista',
  templateUrl: './voo-lista.component.html',
  styleUrls: ['./voo-lista.component.css']
})
export class VooListaComponent implements OnInit {

  voos: Voo[] = [];
  constructor(private vooService: VooService) { }

  ngOnInit(): void {
    this.vooService.get().subscribe((voos: Voo[])=>{
      this.voos = voos;
    })
  }

}
