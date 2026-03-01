import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-inclusion-page',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatCardModule],
    template: `
    <div class="page-container animate-fade-in">
      <header class="page-header">
        <h1 class="gradient-text">Programmes d'Inclusion</h1>
        <p>Découvrez les dispositifs d'aide mis en place par l'État Togolais.</p>
      </header>

      <div class="programs-grid">
        <mat-card class="program-card">
          <mat-card-header>
            <mat-icon mat-card-avatar>payments</mat-icon>
            <mat-card-title>Novissi</mat-card-title>
            <mat-card-subtitle>Transferts monétaires</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Soutien financier mensuel pour les ménages les plus pauvres impactés par les crises économiques.</p>
          </mat-card-content>
        </mat-card>

        <mat-card class="program-card">
          <mat-card-header>
            <mat-icon mat-card-avatar>health_and_safety</mat-icon>
            <mat-card-title>Assurance Maladie</mat-card-title>
            <mat-card-subtitle>Couverture universelle</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Accès gratuit aux soins essentiels pour les familles enregistrées dans la base de données sociale.</p>
          </mat-card-content>
        </mat-card>

        <mat-card class="program-card">
          <mat-card-header>
            <mat-icon mat-card-avatar>restaurant</mat-icon>
            <mat-card-title>Cantines Scolaires</mat-card-title>
            <mat-card-subtitle>Soutien nutritionnel</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Repas gratuits pour les enfants issus de ménages à score social élevé dans les zones rurales.</p>
          </mat-card-content>
        </mat-card>
      </div>

      <section class="eligibility-notice glass-card">
        <h3>Vérifiez votre éligibilité</h3>
        <p>
          Votre éligibilité à ces programmes est automatiquement déterminée après votre recensement. 
          Connectez-vous à votre espace "Chef de Ménage" pour consulter vos droits.
        </p>
      </section>
    </div>
  `,
    styles: [`
    .page-container { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
    .page-header { text-align: center; margin-bottom: 4rem; }
    .programs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 5rem; }
    .program-card { padding: 1.5rem; transition: transform 0.3s ease; border-radius: 16px; border: 1px solid rgba(0,0,0,0.05); }
    .program-card:hover { transform: translateY(-10px); }
    mat-icon[mat-card-avatar] { background: #e0f2f1; color: #006064; padding: 10px; border-radius: 50%; }
    .eligibility-notice { padding: 3rem; text-align: center; margin-top: 3rem; }
  `]
})
export class InclusionPageComponent { }
