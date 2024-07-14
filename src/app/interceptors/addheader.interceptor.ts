import { HttpInterceptorFn } from '@angular/common/http';

export const addheaderInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
