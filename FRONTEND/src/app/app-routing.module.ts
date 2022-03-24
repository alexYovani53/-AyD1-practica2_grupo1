import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from "./registro/registro.component";
import { AceptarSolicitudComponent } from "./aceptar-solicitud/aceptar-solicitud.component";
import {EnviarSolicitudComponent} from "./enviar-solicitud/enviar-solicitud.component";
import { ViewPostComponent } from "./view-post/view-post.component"
import {EnviarSolicitudComponent} from "./enviar-solicitud/enviar-solicitud.component";
const routes: Routes = [
  {
    path: 'Login',
    component:LoginComponent
  },
  {
    path: 'Registro',
    component:RegistroComponent
  },
  {
    path : 'paginaInicio',
    component:PaginaInicioComponent
  },
  {
    path : 'crearPublicacion',
    component:CrearPublicacionComponent
  },
  {
    path : 'aceptarSolicitud',
    component:AceptarSolicitudComponent
  },
  {
    path : 'enviarSolicitud',
    component:EnviarSolicitudComponent
  },
  {
    path : 'viewPost',
    component:ViewPostComponent
  },
  {
    path : '**', redirectTo: 'Login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
