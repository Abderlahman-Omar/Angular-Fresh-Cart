import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  headers: any = {
    token: localStorage.getItem('userToken'),
  };
  constructor(private httpClient: HttpClient) {}

  addToCart(productId: string): Observable<any> {
    return this.httpClient.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: productId,
      },
      {
        headers: this.headers,
      }
    );
  }
  getLoggedUserCart(): Observable<any> {
    return this.httpClient.get(
      `https://ecommerce.routemisr.com/api/v1/cart`,

      {
        headers: this.headers,
      }
    );
  }
  removeSpecificCartItem(productId: string): Observable<any> {
    return this.httpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        headers: this.headers,
      }
    );
  }
  updateCartProductQuantity(productId: string, count: number): Observable<any> {
    return this.httpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        count: count,
      },
      {
        headers: this.headers,
      }
    );
  }
}
