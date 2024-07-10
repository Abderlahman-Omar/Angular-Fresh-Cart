import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/auth/products/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../../interfaces/product/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getCategories().subscribe({
      next: (response) => {
        this.categories = response.data;
      },
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7,
      },
    },
    nav: true,
  };
}
