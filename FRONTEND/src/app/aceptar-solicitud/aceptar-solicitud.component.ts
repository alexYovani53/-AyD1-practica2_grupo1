import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceptar-solicitud',
  templateUrl: './aceptar-solicitud.component.html',
  styleUrls: ['./aceptar-solicitud.component.css']
})
export class AceptarSolicitudComponent implements OnInit {

  lista:any = 
  [
    {name :"Mario2", url : "https://static1.funidelia.com/26258-f6_big2/mascara-de-mario-bros-para-adulto.jpg"},

    {name : "Mario", url : "https://static1.funidelia.com/26258-f6_big2/mascara-de-mario-bros-para-adulto.jpg"},
    {name : "Mario", url : "https://static1.funidelia.com/26258-f6_big2/mascara-de-mario-bros-para-adulto.jpg"},
    {name : "Mario", url : "https://static1.funidelia.com/26258-f6_big2/mascara-de-mario-bros-para-adulto.jpg"},
    {name : "Mario", url : "https://static1.funidelia.com/26258-f6_big2/mascara-de-mario-bros-para-adulto.jpg"},
    {name : "Mario", url : "https://static1.funidelia.com/26258-f6_big2/mascara-de-mario-bros-para-adulto.jpg"},
    {name : "Mario", url : "https://static1.funidelia.com/26258-f6_big2/mascara-de-mario-bros-para-adulto.jpg"},
    {name : "Mario", url : "https://static1.funidelia.com/26258-f6_big2/mascara-de-mario-bros-para-adulto.jpg"},
    {name : "Mario", url : "https://static1.funidelia.com/26258-f6_big2/mascara-de-mario-bros-para-adulto.jpg"},
    

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
