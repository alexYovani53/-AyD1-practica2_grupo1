import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-navig',
  templateUrl: './navig.component.html',
  styleUrls: ['./navig.component.css']
})
export class NavigComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  killSesion(){
    localStorage.clear();
    this.router.navigate(['/Login']);
  }
}
