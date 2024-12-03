import { Component, inject } from '@angular/core';
import { User } from '../../types';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);
  private _router = inject(Router);

  loginUserData: User = { email: '', password: '' };

  loginUser() {
    this.authService.loginUser(this.loginUserData).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']);
      },
      error: (err) => console.log(err),
    });
  }
}
