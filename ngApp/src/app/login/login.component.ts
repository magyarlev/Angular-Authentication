import { Component, inject } from '@angular/core';
import { User } from '../../types';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  authService = inject(AuthService);

  loginUserData: User = { email: '', password: '' };

  loginUser() {
    this.authService.loginUser(this.loginUserData).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
