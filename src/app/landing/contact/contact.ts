import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
    template: `
    <div class="page-container animate-fade-in">
      <section class="hero-small">
        <h1 class="gradient-text">Contactez-nous</h1>
        <p>Nous sommes à votre écoute pour toute question ou assistance.</p>
      </section>

      <div class="contact-grid">
        <div class="glass-card contact-form">
          <h2>Envoyez un message</h2>
          <form>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Nom complet</mat-label>
              <input matInput placeholder="Ex: Jean Koffi">
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input matInput type="email" placeholder="jean@example.com">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Message</mat-label>
              <textarea matInput rows="5" placeholder="Votre message..."></textarea>
            </mat-form-field>

            <button mat-raised-button color="primary" class="premium-btn full-width">Envoyer</button>
          </form>
        </div>

        <div class="contact-info">
          <div class="glass-card info-item">
            <mat-icon>location_on</mat-icon>
            <div>
              <h3>Adresse</h3>
              <p>Boulevard du Mono, Lomé, Togo</p>
            </div>
          </div>
          <div class="glass-card info-item">
            <mat-icon>phone</mat-icon>
            <div>
              <h3>Téléphone</h3>
              <p>+228 90 00 00 00</p>
            </div>
          </div>
          <div class="glass-card info-item">
            <mat-icon>email</mat-icon>
            <div>
              <h3>Email</h3>
              <p>contact&#64;social.gouv.tg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .page-container { padding: 4rem 2rem; max-width: 1100px; margin: 0 auto; }
    .hero-small { text-align: center; margin-bottom: 4rem; }
    .contact-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 3rem; }
    .full-width { width: 100%; margin-bottom: 1rem; }
    .contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
    .info-item { padding: 1.5rem; display: flex; gap: 1.5rem; align-items: center; }
    .info-item mat-icon { font-size: 32px; width: 32px; height: 32px; color: #ffb300; }
    h3 { margin: 0; font-size: 1.1rem; }
    p { margin: 0; color: #888; }
    @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
  `]
})
export class ContactComponent { }
