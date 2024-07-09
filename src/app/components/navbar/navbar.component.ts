import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
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
