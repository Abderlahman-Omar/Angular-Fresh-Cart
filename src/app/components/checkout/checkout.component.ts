import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  constructor(private cartService: CartService) {}
  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  });
  navigateToPage(url: string) {
    window.location.href = url;
  }
  //6690a784ed0dc0016c9ffc84
  handleSubmit(shippingAddress: FormGroup) {
    this.cartService
      .onlinePayment(shippingAddress.value, '6690a784ed0dc0016c9ffc84')
      .subscribe({
        next: (response: any) => {
          this.navigateToPage(response.session.url);
        },
        error: (error) => console.log(error),
      });
  }
}
