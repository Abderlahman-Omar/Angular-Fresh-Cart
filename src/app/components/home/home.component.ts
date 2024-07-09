import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/auth/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data;
        console.log(this.products);
      },
    });
  }
}
