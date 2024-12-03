import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const _authService = inject(AuthService);
  if (_authService.loggedIn()) {
    return true;
  } else {
    _router.navigate(['/login']);
    return false;
  }
};
