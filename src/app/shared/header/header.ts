import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar class="glass-header">
      <div class="header-container">
        <div class="logo" routerLink="/">
          <mat-icon>public</mat-icon>
          <span>Plateforme Sociale Togo</span>
        </div>
        
        <span class="spacer"></span>
        
        <div class="nav-links">
          <a mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Accueil</a>
          <a mat-button routerLink="/about" routerLinkActive="active">À propos</a>
          <a mat-button routerLink="/contact" routerLinkActive="active">Contact</a>
          <a mat-button routerLink="/auth/register" routerLinkActive="active">Inscription</a>
          <button mat-flat-button color="primary" routerLink="/auth/login" class="premium-btn">Connexion</button>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .glass-header {
      background: rgba(255, 255, 255, 0.8) !important;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      position: sticky;
      top: 0;
      z-index: 1000;
      height: 75px;
      color: #333;
    }
    .header-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 0 20px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      font-weight: 800;
      font-size: 1.3rem;
      color: #006064;
      mat-icon { color: #00838f; font-size: 32px; width: 32px; height: 32px; }
    }
    .spacer { flex: 1 1 auto; }
    .nav-links {
      display: flex;
      gap: 10px;
      align-items: center;
      
      a { 
        color: #555; 
        font-weight: 500;
        transition: color 0.3s ease;
      }
      a:hover { color: #006064; }
      .active { color: #006064; font-weight: 700; }
    }
    .premium-btn {
      border-radius: 20px;
      padding: 0 25px;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      .nav-links a:not(.premium-btn) { display: none; }
    }
  `]
})
export class HeaderComponent { }
