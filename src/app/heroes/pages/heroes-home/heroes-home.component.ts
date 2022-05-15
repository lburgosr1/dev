import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.css']
})
export class HeroesHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['./auth']);
  }

}
