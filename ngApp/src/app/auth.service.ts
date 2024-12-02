import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  private _registerUrl = 'http://localhost:3000/api/register';

  registerUser(user: User) {
    return this.http.post<User>(this._registerUrl, user);
  }
}
