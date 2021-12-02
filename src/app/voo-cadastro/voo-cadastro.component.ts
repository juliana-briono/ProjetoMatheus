import { Component, OnInit } from '@angular/core';
import { LocalidadeService } from '../services/localidade.service';
import { VooService } from '../services/voo.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Voo } from '../models/voo.model';
import { Localidade } from '../models/localidade.model';

@Component({
  selector: 'app-voo-cadastro',
  templateUrl: './voo-cadastro.component.html',
  styleUrls: ['./voo-cadastro.component.css']
})
export class VooCadastroComponent implements OnInit {

  localidades: Localidade[] = [];
  form: FormGroup;
  id: number;
  dataHoraFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  origemFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  destinoFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  quantidadeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  valorFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  numeroVooFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });

  constructor(private localidadeService: LocalidadeService,
    private vooService: VooService,
    private router: Router,
    private fb: FormBuilder) { 
      this.form = this.fb.group({
        dataHoraFormControl: this.dataHoraFormControl,
        origemFormControl: this.origemFormControl,
        destinoFormControl: this.destinoFormControl,
        quantidadeFormControl: this.quantidadeFormControl,
        valorFormControl: this.valorFormControl,
        numeroVooFormControl: this.numeroVooFormControl
      })
    }

  ngOnInit(): void {
    this.localidadeService.get().subscribe((localidades: Localidade[])=>{
      this.localidades = localidades;
    })
  }

  salvar(){
    if(this.form.valid){
      let voo: Voo = new Voo();
      voo.origem = this.localidades.filter((loc)=> {return loc.id == Number.parseInt(this.origemFormControl.value)})[0];
      voo.destino = this.localidades.filter((loc)=> {return loc.id == Number.parseInt(this.destinoFormControl.value)})[0];
      voo.dataHoraVoo = this.dataHoraFormControl.value;
      voo.numeroVoo = this.numeroVooFormControl.value;
      voo.quantidade = this.quantidadeFormControl.value;
      voo.valor = this.valorFormControl.value;
      this.vooService.post(voo).subscribe(()=>{
        this.router.navigate(["/voo-lista"]);
      })
    } else {
      alert("Dados preenchidos incorretos.")
    }
  }

}
