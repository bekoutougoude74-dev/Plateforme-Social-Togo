import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-recensement-page',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
    template: `
    <div class="page-container animate-fade-in">
      <header class="page-header">
        <h1 class="gradient-text">Le Recensement Social</h1>
        <p>Une étape cruciale pour l'inclusion et le développement durable.</p>
      </header>

      <section class="info-grid">
        <div class="glass-card info-card">
          <mat-icon>how_to_reg</mat-icon>
          <h2>Pourquoi se recenser ?</h2>
          <p>
            Le recensement permet à l'État de connaître la situation réelle des ménages. 
            C'est la porte d'entrée pour bénéficier des aides sociales, des soins de santé 
            gratuits et des programmes de soutien à l'éducation.
          </p>
        </div>

        <div class="glass-card info-card">
          <mat-icon>fact_check</mat-icon>
          <h2>Comment ça marche ?</h2>
          <ol>
            <li><strong>Inscription :</strong> Le chef de ménage crée un compte sur la plateforme.</li>
            <li><strong>Collecte :</strong> Un agent recenseur visite le foyer ou le chef remplit le formulaire en ligne.</li>
            <li><strong>Validation :</strong> Les données sont vérifiées et le score social est calculé.</li>
          </ol>
        </div>
      </section>

      <div class="cta-section">
        <h3>Prêt à commencer ?</h3>
        <button mat-raised-button color="primary" routerLink="/auth/register" class="premium-btn lg">
          S'inscrire Maintenant
        </button>
      </div>
    </div>
  `,
    styles: [`
    .page-container { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
    .page-header { text-align: center; margin-bottom: 5rem; }
    h1 { font-size: 3rem; margin-bottom: 1rem; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-bottom: 5rem; }
    .info-card { padding: 3rem; h2 { margin-top: 1rem; color: #006064; } ol { padding-left: 20px; li { margin-bottom: 15px; } } }
    .cta-section { text-align: center; padding: 4rem; background: #f0f4f4; border-radius: 24px; }
    @media (max-width: 768px) { .info-grid { grid-template-columns: 1fr; } }
  `]
})
export class RecensementPageComponent { }
