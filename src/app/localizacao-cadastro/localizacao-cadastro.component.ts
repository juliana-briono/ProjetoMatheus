import { Component, OnInit } from '@angular/core';
import { LocalidadeService } from '../services/localidade.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Localidade } from '../models/localidade.model';

@Component({
  selector: 'app-localizacao-cadastro',
  templateUrl: './localizacao-cadastro.component.html',
  styleUrls: ['./localizacao-cadastro.component.css']
})
export class LocalizacaoCadastroComponent implements OnInit {

  form: FormGroup;
  id: number;
  nomeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  urlImagemFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });

  constructor(private localidadeService: LocalidadeService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.form = this.fb.group({
      nomeFormControl: this.nomeFormControl,
      urlImagemFormControl: this.urlImagemFormControl
    });
  }

  ngOnInit(): void {
    let id: string;
    id = this.route.snapshot.paramMap.get("id");
    if(id == undefined || id == null){

    } else {
      this.id = Number.parseInt(id);
      this.localidadeService.getPeloId(this.id).subscribe((localidade: Localidade)=>{
        this.nomeFormControl.setValue(localidade.nome);
        this.urlImagemFormControl.setValue(localidade.urlImagem);
      })
    }
  }
  salvar() {
    if (this.form.valid) {
      let localidade: Localidade = new Localidade();
      localidade.nome = this.nomeFormControl.value;
      localidade.urlImagem = this.urlImagemFormControl.value;
      if (this.id == undefined || this.id == 0) {
        this.localidadeService.post(localidade).subscribe(() => {
          this.router.navigate(["/localizacao-lista"]);
        })
      } else {
        localidade.id = this.id;
        this.localidadeService.put(localidade).subscribe(() => {
          this.router.navigate(["/localizacao-lista"]);
        })
      }
    }
  }

}
