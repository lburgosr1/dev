import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) { }

  login() {
    this.authService.login().subscribe({
      next: (user) => {
        if(user.id) {
          this.router.navigate(['./heroes']);
          this.snackBar.open(`Bienvenido ${user.usuario}!`, '',
          {
            duration: 3000,
            panelClass: ['snackBar-success']
          })
        }
      },
      error: (err) => {
        this.snackBar.open(`Usuario no registrado`, '',
          {
            duration: 3000,
            panelClass: ['snackBar-fail']
          })
        }
    });
  }


}
