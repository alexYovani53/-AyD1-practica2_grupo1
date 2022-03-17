import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from "../services/users/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Objeto para el localstorage
  objstorage: any = {
    username: ''
  }
  correo: any;
  contra: any;
  valdatos: boolean | undefined;

  constructor(private router: Router, public userService: UsersService) { }

  ngOnInit(): void {
    //Al inicio se limpia el local storage
    localStorage.clear();
  }

  //Obtener los datos de usuario
  Capturadatos(correo:any, contra:any)
  {
    //Enviar datos a las variables
    this.correo = correo.value;
    this.contra = contra.value;

    //Llamado a verificadoras del contenido de los inputs
    this.valdatos = this.Verifcamposllenos(this.correo, this.contra);

    //Si ambas variables son verdaderas se procede a la siguiente verificación
    if(this.valdatos == true)
    {
      //Se verifica al usuario que esté registrado
      this.Verifuser(this.correo, this.contra);
    }
  };

  //---------Función de verificación de contenido
  Verifcamposllenos(correo:string, contra:string): boolean
  {
    //Campos deben ser distintos de null
    if(correo == '' || contra == '')
    {
      alert('Es necesario llenar todos los campos');
      return false;
    }
    else
    {
      return true;
    }
  };

  //---------Función de verificación de usuario
  Verifuser(correo:string, contra:string)
  {
    const user = { user_name: correo, password: contra };
    this.userService.login(user).subscribe(res => {
      console.log(res);

      if (res.status != 200) {
        console.error(res.message);
        alert(`Error: ${res.message}`);
        return;
      }

      //La respuesta se almacena en el objstorage
      this.objstorage.username = res.data.id_usuario.toString() + res.data.usuario;

      //Guardado en el LocalStorage
      localStorage.setItem('username', this.objstorage.username);

      //Redirigir
      this.router.navigate(['/paginaInicio']);
    }, err => {
      console.error(err);
      alert("Datos erróneos");
    });
  };

  //----------Otras funciones
  //Ir a registro
  Registro()
  {
    this.router.navigate(['/Registro']);
  }
}
