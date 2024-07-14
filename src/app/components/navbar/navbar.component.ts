import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isLogin: boolean = false;
  cartNumber: number = 0;
  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {
    cartService.numberOfCartItem.subscribe({
      next: (response) => {
        this.cartNumber = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
    authService.userData.subscribe({
      next: () => {
        if (authService.userData.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });
  }

  signout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
