import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.css']
})
export class HeroesHomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./auth']);
  }

  get user(): User {
    return this.authService.auth;
  }
}
