import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/auth/products/products.service';
import { ActivatedRoute } from '@angular/router';

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
    private activatedRoute: ActivatedRoute
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
}
