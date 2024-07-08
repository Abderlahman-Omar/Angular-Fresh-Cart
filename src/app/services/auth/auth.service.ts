import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(userData: object): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userData
    );
  }
}
