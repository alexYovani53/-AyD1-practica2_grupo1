import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavigComponent } from './navig/navig.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './login/login.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { RegistroComponent } from './registro/registro.component';
import { AceptarSolicitudComponent } from './aceptar-solicitud/aceptar-solicitud.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { EnviarSolicitudComponent } from './enviar-solicitud/enviar-solicitud.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigComponent,
    PaginaInicioComponent,
    LoginComponent,
    RegistroComponent,
    CrearPublicacionComponent,
    AceptarSolicitudComponent,
    ViewPostComponent,
    EnviarSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
