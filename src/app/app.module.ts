import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CarrinhoListaComponent } from './carrinho-lista/carrinho-lista.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { VooListaComponent } from './voo-lista/voo-lista.component';
import { VooCadastroComponent } from './voo-cadastro/voo-cadastro.component';
import { LocalizacaoListaComponent } from './localizacao-lista/localizacao-lista.component';
import { LocalizacaoCadastroComponent } from './localizacao-cadastro/localizacao-cadastro.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    CarrinhoListaComponent,
    SobreComponent,
    LoginComponent,
    ReportComponent,
    VooListaComponent,
    VooCadastroComponent,
    LocalizacaoListaComponent,
    LocalizacaoCadastroComponent,
    ClienteCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
