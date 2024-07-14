import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/auth/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../interfaces/product/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  productDetails: any;
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    });
    this.productsService.getSingleProducts(this.productId).subscribe({
      next: (response) => {
        this.productDetails = response.data;
      },
    });
  }
  addToCart(productId: string) {
    this.cartService.addToCart(productId).subscribe({
      next: (response) => {
        console.log(response);
        this.cartService.numberOfCartItem.next(response.numOfCartItems);
      },
      error: (error) => console.log(error),
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
        items: 1,
      },
    },
    nav: true,
  };
}
