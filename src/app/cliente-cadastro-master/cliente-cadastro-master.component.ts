import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';


@Component({
  selector: 'app-cliente-cadastro-master',
  templateUrl: './cliente-cadastro-master.component.html',
  styleUrls: ['./cliente-cadastro-master.component.css']
})
export class ClienteCadastroMasterComponent implements OnInit {

  id: number;
  cliente: Cliente;
  form: FormGroup;
  nomeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cpfFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  emailFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  senhaFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  

  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clienteService: ClienteService) {
    this.form = this.fb.group({
      nomeFormControl: this.nomeFormControl,
      cpfFormControl: this.cpfFormControl,
      emailFormControl: this.emailFormControl,
      senhaFormControl: this.senhaFormControl,
    });
  }

  ngOnInit(): void {
    let id: string;
    id = this.route.snapshot.paramMap.get("id");
    if (id != undefined || id != null) {
      this.id = Number.parseInt(id);
      this.clienteService.getPeloId(this.id).subscribe((cliente: Cliente) => {
        this.nomeFormControl.setValue(cliente.nome);
        this.emailFormControl.setValue(cliente.email);
        this.cpfFormControl.setValue(cliente.cpf);
      })
    }
  }

  salvar() {
    if (this.form.valid) {
      if (this.cliente == undefined || this.cliente == null)
        this.cliente = new Cliente();
      this.cliente.nome = this.nomeFormControl.value;
      this.cliente.cpf = this.cpfFormControl.value;
      this.cliente.email = this.emailFormControl.value;
      this.cliente.senha = this.senhaFormControl.value;
      if (this.cliente.id == undefined || this.cliente.id == 0)
        this.clienteService.post(this.cliente).subscribe(() => {

        });
      else
        this.clienteService.put(this.cliente).subscribe(() => {

        });
    }
  }

}
