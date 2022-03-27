import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {
  objstorage: any = {
    username: '',
    idusuario: 0,
    foto: '',
    contrasena: '',
    nombre: ''
  }
  permitido: boolean = false;
  verNuevaContra: boolean = false;
  verificado: boolean = false;
  user?: string = '';
  name?: string = '';
  passNueva?: string ='';
  passVerificar?: string ='';
  imageSrc?: string = '';
  imageAlt?: string = '';
  image: string = '';
  fototext: string = '';

  constructor(private userService: UsersService, private router: Router) {
   }

  ngOnInit(): void {
    this.construir();
  }

  public getUsuario(username? :string, pass?:string){
    const user = { user_name: username, password: pass }
    this.userService.login(user).subscribe(res => {
      console.log(res);

      if (res.status != 200) {
        console.error(res.message);
        alert(`Error: ${res.message}`);
        return;
      }

      //La respuesta se almacena en el objstorage
      this.objstorage.username = res.data.usuario;
      this.objstorage.id_usuario = res.data.id_usuario;
      this.objstorage.foto = res.data.foto;
      this.objstorage.contrasena = res.data.contrasena;
      this.objstorage.nombre = res.data.nombre;
      localStorage.clear();
      //Guardado en el LocalStorage
      localStorage.setItem('username', this.objstorage.username);
      localStorage.setItem('idusuario', this.objstorage.id_usuario);
      localStorage.setItem('foto', this.objstorage.foto);
      localStorage.setItem('contrasena', this.objstorage.contrasena);
      localStorage.setItem('nombre', this.objstorage.nombre);
      this.passVerificar = '';
      this.fototext = '';
      this.verNuevaContra = false
      this.construir();
      alert('Se guardaron los cambios')
    }, err => {
      console.error(err);
      alert("Datos erróneos");
    });
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
      let imgB64 
      if(this.fototext != ''){
        imgB64 = this.image
      }else{
        imgB64 = localStorage.getItem('foto')?.toString()
      }

      this.userService.updatePerfil( {newName: this.name, newUsername : this.user, photo: imgB64, pass : this.passNueva},Number(localStorage.getItem('idusuario'))).subscribe(
        res => {
          this.getUsuario(this.user, this.passNueva)
          //alert("Se guardo exitosamente")
        },
        err => {
          console.error(err);
          alert("Error, no pudo realizar la acción aceptar");
        }
      )

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
    this.fototext = '';
    this.construir();
  }

  
  getBase64 = (file:any)=>{
    return new Promise(resolve=>{
        let baseURL;            
        let reader =  new FileReader();

        reader.readAsDataURL(file);

        reader.onload=()=>{
            baseURL =  reader.result;
            resolve(baseURL);
        }
        
    });

  }

  
  fileChange(fileInput:any){
    this.image = "";
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      this.fototext = fileInput.target.files[0].name;

      this.getBase64(fileInput.target.files[0])
      .then((resultado) =>{
          this.image = String(resultado).split(",")[1];
      })
      .catch(err =>{
          console.log(err)
      });
    }
  }

}

