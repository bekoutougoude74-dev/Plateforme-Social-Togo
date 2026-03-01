import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  credentials = { username: '', password: '' };
  error: string | null = null;
  loading = false;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.loading = true;
    this.error = null;

    // Simulate slight delay for premium feel
    setTimeout(() => {
      this.authService.login(this.credentials).subscribe(success => {
        this.loading = false;
        if (success) {
          this.router.navigate(['/app/dashboard/agent']); // Updated prefix
        } else {
          this.error = 'Identifiants invalides. Essayez admin/admin ou chef/chef.';
        }
      });
    }, 800);
  }
}
