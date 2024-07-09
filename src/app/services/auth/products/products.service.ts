import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.httpClient.get(
      'https://ecommerce.routemisr.com/api/v1/products'
    );
  }
  getSingleProducts(id: string): Observable<any> {
    return this.httpClient.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }
  getCategories(): Observable<any> {
    return this.httpClient.get(
      'https://ecommerce.routemisr.com/api/v1/categories'
    );
  }
  getSingleCategory(id: string): Observable<any> {
    return this.httpClient.get(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`
    );
  }
  getBrands(): Observable<any> {
    return this.httpClient.get('https://ecommerce.routemisr.com/api/v1/brands');
  }
  getSingleBrand(id: string): Observable<any> {
    return this.httpClient.get(
      `https://ecommerce.routemisr.com/api/v1/brands/${id}`
    );
  }
}
