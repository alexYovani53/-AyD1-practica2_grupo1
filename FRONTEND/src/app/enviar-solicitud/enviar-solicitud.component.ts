import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../services/users/users.service";
import {FriendService} from "../services/friends/friend.service";

@Component({
  selector: 'app-enviar-solicitud',
  templateUrl: './enviar-solicitud.component.html',
  styleUrls: ['./enviar-solicitud.component.css']
})
export class EnviarSolicitudComponent implements OnInit {

  username: any;
  isShow: boolean = false;
  constructor(private router: Router, public friendService: FriendService) { }

  lista:any = [];

  ngOnInit(): void {
    if (localStorage.length == 0) {
      this.router.navigate(['/paginaInicio']);
    }
    this.username = localStorage.getItem("username");
    this.getNotFriends(this.username);
  }

  getNotFriends(username: any): void {
    this.friendService.notFriends(username).subscribe(res => {
      let users = res.resultado;
      for (let u of users) {
        // u.foto = "https://i1.sndcdn.com/avatars-000425951190-weqmxv-t500x500.jpg";
        u.foto = `data:image/png;base64,${u.foto}`;
        // console.log(u.foto)
        this.lista.push(u);
      }
    });
  }

  sendFriendRequest(userToBeFriend: string): void {
    let idUser1 = localStorage.getItem("idusuario");
    // @ts-ignore
    this.friendService.sendRequest(parseInt(idUser1), parseInt(userToBeFriend)).subscribe(res => {
      console.log(res)
    })

    this.isShow = true;
    setTimeout(() => {
      this.isShow = false;
      window.location.href = "http://localhost:4200/enviarSolicitud";
    }, 2000)
  }
}
