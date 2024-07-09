import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/auth/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  productId: any;
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
