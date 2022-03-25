import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  listPost = [
    {
      "img": "https://somoskudasai.com/wp-content/uploads/2021/07/portada_monogatari-series-5.jpg",
      "publication": "Esta es mi primera publicación",
      "user": "Elian Estrada",
      "date": "24 de Marzo a las 11:43",
      "userImage": "data:image/png;base64," + localStorage.getItem("foto")?.toString()
    },
    {
      "img": "https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/2022-02/animes.jpg",
      "publication": "Kimetsu No Yaiba :3",
      "user": "Elian Estrada",
      "date": "24 de Marzo a las 11:48",
      "userImage": "data:image/png;base64," + localStorage.getItem("foto")?.toString()
    },
    {
      "img": "https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg",
      "publication": "Me lo merezco",
      "user": "Elian Estrada",
      "date": "24 de Marzo a las 12:43",
      "userImage": "data:image/png;base64," + localStorage.getItem("foto")?.toString()
    },
    {
      "img": "https://somoskudasai.com/wp-content/uploads/2021/07/portada_monogatari-series-5.jpg",
      "publication": "Esta es mi primera publicación",
      "user": "Elian Estrada",
      "date": "24 de Marzo a las 11:43",
      "userImage": "data:image/png;base64," + localStorage.getItem("foto")?.toString()
    }
  ]

  isImg:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
