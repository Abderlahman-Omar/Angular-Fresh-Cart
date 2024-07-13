import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartDetails: any;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getLoggedUserCart().subscribe({
      next: (response) => {
        this.cartDetails = response.data;
        console.log(this.cartDetails);
      },
      error: (error) => console.log(error),
    });
  }
  removeItem(productId: string) {
    this.cartService.removeSpecificCartItem(productId).subscribe({
      next: (response) => {
        console.log(response);

        this.cartDetails = response.data;
      },
      error: (error) => console.log(error),
    });
  }
  updateItemCount(productId: string, count: number) {
    this.cartService.updateCartProductQuantity(productId, count).subscribe({
      next: (response) => {
        console.log(response);

        this.cartDetails = response.data;
      },
      error: (error) => console.log(error),
    });
  }
}
