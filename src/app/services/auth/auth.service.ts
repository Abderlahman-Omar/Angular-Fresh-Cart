import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private httpClient: HttpClient) {}

  decodeUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    console.log(this.userData);
  }

  register(userData: object): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userData
    );
  }
  login(userData: object): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      userData
    );
  }
  logout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
  }
}
