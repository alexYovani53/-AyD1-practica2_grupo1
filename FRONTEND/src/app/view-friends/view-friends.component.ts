import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent implements OnInit {

  friends: any;
  exist:boolean;

  constructor() { this.exist = false }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    let response;
    try{
      response = await axios.get(`http://localhost:1337/verAmigos/${localStorage.getItem('idusuario')}`);
    } catch (e){
      console.error(e);
    }
    console.log(response);
    
    if (response !== undefined) {
      alert("entra")
      this.friends = [...response.data.rows];
    }
    
    if (this.friends.lenght !== 0){
      this.exist = true
    }
  }
}
