import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  listPost:any;
  exist: boolean;

  constructor() { this.exist = false }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
      const response = await axios.get(`http://localhost:1337/verPost/${localStorage.getItem("idusuario")?.toString()}`)
      
      if (response.status != 200) {
        alert("Error al cargar Data");
        return
      }
      console.log(this.listPost);
      
      console.log(response.data.rows);
      this.listPost = [...response.data.rows];

      if (this.listPost.lenght !== 0){
        this.exist = true;
      }

  }

}
