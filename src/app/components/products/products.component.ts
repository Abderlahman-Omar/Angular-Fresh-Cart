import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/auth/products/products.service';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productId: any;
  searchTerm: string = '';
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        // console.log(this.products);
      },
    });
  }
}
