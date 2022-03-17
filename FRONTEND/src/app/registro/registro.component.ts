import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { API_URL } from '../services/URL';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  crearUsuario: FormGroup;
  ErrorContrasena: String = "";
  ErrorFoto: String = "";
  ErrorNombre: String = "";
  ErrorUsuario: String = "";
  foto:String="";

  constructor(private formulario: FormBuilder,private router:Router) { 
    this.crearUsuario = this.formulario.group({
      nombre:['',Validators.required],
      usuario:['',Validators.required],
      contrasena:['',Validators.required],
      confirmar:['',Validators.required],
      fototext:[''],
      foto:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  test(){
    console.log(this.crearUsuario);
    this.ErrorContrasena = "";
    this.ErrorFoto="";
    this.ErrorNombre="";
    this.ErrorUsuario ="";

    if(!this.crearUsuario.valid){
      if(this.crearUsuario.value.contrasena != this.crearUsuario.value.confirmar){
        this.ErrorContrasena="Las contraseñas no coinciden";
      }

      if(this.crearUsuario.value.usuario =="") this.ErrorUsuario = "Ingrese un usuario";

      if(this.crearUsuario.value.nombre =="") this.ErrorNombre = "Ingrese su nombre";
      
      if(this.crearUsuario.value.fototext =="") this.ErrorFoto = "Seleccione una foto";
      
      if(this.crearUsuario.value.foto =="") this.ErrorFoto = "Seleccione una foto";

      if(this.crearUsuario.value.contrasena =="") this.ErrorContrasena = "Ingrese su contraseña";
      

      return;
    }
    axios.post("http://localhost:1337/registro/crear",{
      nombre:this.crearUsuario.value.nombre,
      usuario:this.crearUsuario.value.usuario,
      contrasena:this.crearUsuario.value.contrasena,
      foto:this.foto
    }).then(result=>{
        if(result.data.status ==1){

          this.router.navigate(['/Login']);
        }
      }
    ).catch(err=>{
      console.log(err)
    })

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
    this.foto = "";
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      this.crearUsuario.value.fototext = fileInput.target.files[0].name;

      this.getBase64(fileInput.target.files[0])
      .then((resultado) =>{
          this.foto = String(resultado).split(",")[1];
      })
      .catch(err =>{
          console.log(err)
      });
     
    }

    
  }
}
