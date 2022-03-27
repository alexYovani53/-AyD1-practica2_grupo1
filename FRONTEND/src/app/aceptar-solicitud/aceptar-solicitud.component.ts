import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendService } from '../services/friends/friend.service';

@Component({
  selector: 'app-aceptar-solicitud',
  templateUrl: './aceptar-solicitud.component.html',
  styleUrls: ['./aceptar-solicitud.component.css']
})
export class AceptarSolicitudComponent implements OnInit {

  lista:any = []


  constructor(private friendService: FriendService, private router: Router) { 

  }

  ngOnInit(): void {
    this.verSolicitudes()
  }

  verSolicitudes(){
    this.lista = []
    this.friendService.getVerSolicitud(Number(localStorage.getItem('idusuario'))).subscribe(
      res => {
        res.resultado.forEach((element: any) => {
          element.foto = "data:image/png;base64," + element.foto
        });
        this.lista = res.resultado;
       
      },
      err => {
        console.error(err);
        alert("Error, no pudo ver solicitudes");
      }
    )
  }

  aceptar(idAceptado: number){
    this.friendService.updateAmistad({logUser: Number(localStorage.getItem('idusuario')), toUser: idAceptado}).subscribe(
      res => {
        this.verSolicitudes();
        alert(res.message)
      },
      err => {
        console.error(err);
        alert("Error, no pudo realizar la acción aceptar");
      }
    )
  }

}
