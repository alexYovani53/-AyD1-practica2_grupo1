import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
  
  permitido: boolean = false;
  verNuevaContra: boolean = false;
  verificado: boolean = false;
  user?: string = '';
  name?: string = '';
  passNueva?: string ='';
  passVerificar?: string ='';
  imageSrc?: string = '';
  imageAlt?: string = '';

  constructor() {
   }

  ngOnInit(): void {
    this.construir();
  }

  public construir(){
    this.verificado = false;
    this.user = localStorage.getItem('username')?.toString();
    this.name = localStorage.getItem('nombre')?.toString();
    this.passNueva = localStorage.getItem('contrasena')?.toString();
    //console.log(localStorage.getItem('foto')?.toString())
    this.imageSrc = "data:image/png;base64," + localStorage.getItem('foto')?.toString();
  }

  public guardar(){
    if(this.user != '' && this.name != '' && this.passNueva != ''){
      this.permitido = false;
     

    }else{
      alert('Error: campos obligatorios.');
    }
    
  }

  public verificar(){
    if(localStorage.getItem('contrasena') == this.passVerificar){
      alert('Verificado con exito!.')
      this.verificado = true;
      this.verNuevaContra = true;
    }else{
      alert('Error de password.')
      this.verificado = false;
      this.verNuevaContra = false;
    }
  }

  public cancelar(){
    this.permitido = false;
    this.verNuevaContra = false;
    this.passVerificar = '';
    this.construir();
  }

}

