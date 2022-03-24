import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviar-solicitud',
  templateUrl: './enviar-solicitud.component.html',
  styleUrls: ['./enviar-solicitud.component.css']
})
export class EnviarSolicitudComponent implements OnInit {

  lista:any =
    [
      {name : "Koopa", url : "https://i1.sndcdn.com/avatars-000425951190-weqmxv-t240x240.jpg"},
      {name : "Koopa", url : "https://i1.sndcdn.com/avatars-000425951190-weqmxv-t240x240.jpg"},
      {name : "Koopa", url : "https://i1.sndcdn.com/avatars-000425951190-weqmxv-t240x240.jpg"},
      {name : "Koopa", url : "https://i1.sndcdn.com/avatars-000425951190-weqmxv-t240x240.jpg"},
      {name : "Koopa", url : "https://i1.sndcdn.com/avatars-000425951190-weqmxv-t240x240.jpg"},
      {name : "Koopa", url : "https://i1.sndcdn.com/avatars-000425951190-weqmxv-t240x240.jpg"},
      {name : "Koopa", url : "https://i1.sndcdn.com/avatars-000425951190-weqmxv-t240x240.jpg"},
      {name : "Koopa", url : "https://i1.sndcdn.com/avatars-000425951190-weqmxv-t240x240.jpg"},
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
