import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isLoading: boolean = false;
  apiError: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
    ]),
  });

  handleLogin(loginForm: FormGroup) {
    this.isLoading = true;
    if (loginForm.valid) {
      this.authService.login(loginForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            localStorage.setItem('userToken', response.token);
            this.authService.decodeUserData();
            this.isLoading = false;
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error.message;
        },
      });
    }
  }
}
