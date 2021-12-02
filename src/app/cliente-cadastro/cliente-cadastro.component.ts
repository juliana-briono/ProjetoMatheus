import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';
import { EnderecoService } from '../services/endereco.service';
import { Endereco } from '../models/endereco.model';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  id: number;
  cliente: Cliente;
  form: FormGroup;
  nomeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cpfFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  dataNascimetoFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  emailFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  senhaFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  ruaFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  numeroFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  complementoFormControl = this.fb.control('', { validators: [], updateOn: 'blur' });
  bairroFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cidadeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cepFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });


  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private enderecoService: EnderecoService) {
    this.form = this.fb.group({
      nomeFormControl: this.nomeFormControl,
      cpfFormControl: this.cpfFormControl,
      dataNascimetoFormControl: this.dataNascimetoFormControl,
      emailFormControl: this.emailFormControl,
      senhaFormControl: this.senhaFormControl,
      ruaFormControl: this.ruaFormControl,
      numeroFormControl: this.numeroFormControl,
      complementoFormControl: this.complementoFormControl,
      bairroFormControl: this.bairroFormControl,
      cidadeFormControl: this.cidadeFormControl,
      cepFormControl: this.cepFormControl
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
        this.dataNascimetoFormControl.setValue(cliente.dataNascimento);
        this.ruaFormControl.setValue(cliente.endereco.rua);
        this.numeroFormControl.setValue(cliente.endereco.numero);
        this.complementoFormControl.setValue(cliente.endereco.complemento);
        this.bairroFormControl.setValue(cliente.endereco.bairro);
        this.cidadeFormControl.setValue(cliente.endereco.cidade);
        this.cepFormControl.setValue(cliente.endereco.cep);
        this.cliente = cliente;
      })
    }
  }

  salvar() {
    if (this.form.valid) {
      if (this.cliente == undefined || this.cliente == null)
        this.cliente = new Cliente();
      this.cliente.nome = this.nomeFormControl.value;
      this.cliente.cpf = this.cpfFormControl.value;
      this.cliente.dataNascimento = this.dataNascimetoFormControl.value;
      this.cliente.email = this.emailFormControl.value;
      this.cliente.senha = this.senhaFormControl.value;
      if (this.cliente.endereco == undefined || this.cliente.endereco == null)
        this.cliente.endereco = new Endereco();
      this.cliente.endereco.bairro = this.bairroFormControl.value;
      this.cliente.endereco.cep = this.cepFormControl.value;
      this.cliente.endereco.cidade = this.cidadeFormControl.value;
      this.cliente.endereco.complemento = this.complementoFormControl.value;
      this.cliente.endereco.numero = this.numeroFormControl.value;
      this.cliente.endereco.rua = this.ruaFormControl.value;

      if (this.cliente.id == undefined || this.cliente.id == 0)
        this.clienteService.post(this.cliente).subscribe(() => {

        });
      else
        this.clienteService.put(this.cliente).subscribe(() => {

        });
    }
  }

}
