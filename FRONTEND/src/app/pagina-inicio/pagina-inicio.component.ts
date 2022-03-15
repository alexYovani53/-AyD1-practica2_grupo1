import { Component, OnInit } from '@angular/core';
import {Subject, Observable} from 'rxjs';
@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
  
  permitido: boolean = false;
  verificado: boolean = false;
  user: string = '';
  name: string = '';
  pass : string ='';
  imageSrc: string = '';
  imageAlt: string = '';

  verCam = true;

  constructor() {
   }

  ngOnInit(): void {
    this.construir();
  }

  public construir(){
    this.verificado = false;
    //alert(localStorage.getItem('username'))
  
  }

  public guardar(){
    if(this.user != '' && this.name != '' && this.pass != ''){
      this.permitido = false;
     

    }else{
      alert('Error: campos obligatorios.');
    }
    
  }

  public verificar(){
    if(localStorage.getItem('pass') == this.pass){
      alert('Verificado con exito!.')
      this.verificado = true;
    }else{
      alert('Error de password.')
      this.verificado = false;
    }
  }

  public cancelar(){
    this.permitido = false;
    this.pass = '';
    this.construir();
  }

  captura: MediaTrackConstraints = {
    width: {ideal: 130},
    height: {ideal: 130}
  };


}

