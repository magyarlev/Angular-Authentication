import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const clonedReq = req.clone({
    setHeaders: {
      Authoraziton: `Bearer ${authService.getToken()}`,
    },
  });
  return next(clonedReq);
};
