import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from "./registro/registro.component";
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
    path : '**', redirectTo: 'Login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
