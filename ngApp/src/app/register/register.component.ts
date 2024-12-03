import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../../types';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerUserData: User = { email: '', password: '' };

  private _router = inject(Router);
  private _authService = inject(AuthService);

  registerUser() {
    this._authService.registerUser(this.registerUserData).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']);
      },
      error: (err) => console.log(err),
    });
  }
}
