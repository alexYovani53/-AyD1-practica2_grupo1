import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {
  
  crearPublicacion: FormGroup;

  publication: string = '';
  image: string = '';


  ErrorPublicacion: String = "";
  ErrorImg: String = "";
  ErrorFoto: String = "";

  constructor(private formulario: FormBuilder, private router:Router) {
    
    this.crearPublicacion = this.formulario.group({
      fototext:[''],
      publication:['',Validators.required]
      //,image:['',Validators.required]
    })

   }

  ngOnInit(): void {
  }


  test(){
    console.log(this.crearPublicacion);
    this.ErrorPublicacion = "";
    this.ErrorImg="";

    if(!this.crearPublicacion.valid){

      if(this.crearPublicacion.value.publication =="") this.ErrorPublicacion = "Ingrese  texto de publicación";
      
      if(this.crearPublicacion.value.image =="") this.ErrorImg = "Seleccione una imagen";
      
      //if(this.crearPublicacion.value.fototext =="") this.ErrorFoto = "Seleccione una foto";

      return;
    }

    console.log("axios start");

    let idUser = localStorage.getItem('idusuario'); 

    axios.post("http://localhost:1337/addPost/" + idUser ,{
      publication:this.crearPublicacion.value.publication,
      image: this.image,
    }).then(result=>{
      console.log(result.data.status);
        if(result.data.status == 200){
          alert('Se guardo post exitosamente')
          this.router.navigate(['/viewPost'])
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
    this.image = "";
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      this.crearPublicacion.value.fototext = fileInput.target.files[0].name;

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
