import { LocalizacaoListaComponent } from './localizacao-lista/localizacao-lista.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoListaComponent } from './carrinho-lista/carrinho-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ReportComponent } from './report/report.component';
import { LocalizacaoCadastroComponent } from './localizacao-cadastro/localizacao-cadastro.component';
import { VooListaComponent } from './voo-lista/voo-lista.component';
import { VooCadastroComponent } from './voo-cadastro/voo-cadastro.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"carrinho",
  component: CarrinhoListaComponent
},{
  path:"sobre",
  component: SobreComponent
},{
  path:"relatorio",
  component: ReportComponent
},{
  path:"login",
  component: LoginComponent
},{
  path:"localizacao-lista",
  component: LocalizacaoListaComponent
},{
  path:"localizacao-cadastro",
  component: LocalizacaoCadastroComponent
},{
  path:"localizacao-cadastro/:id",
  component: LocalizacaoCadastroComponent
},{
  path:"voo-lista",
  component: VooListaComponent
},{
  path:"voo-cadastro",
  component: VooCadastroComponent
},{
  path:"cliente-cadastro",
  component: ClienteCadastroComponent
},{
  path:"cliente-cadastro/:id",
  component: ClienteCadastroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
