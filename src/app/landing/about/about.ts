import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="page-container animate-fade-in">
      <section class="hero-small">
        <h1 class="gradient-text">À propos de la Plateforme</h1>
        <p>Une initiative pour l'inclusion sociale au Togo.</p>
      </section>
      
      <section class="content-section">
        <div class="glass-card info-card">
          <h2>Notre Mission</h2>
          <p>
            La Plateforme Sociale Togo a pour mission de recenser et classifier les ménages afin d'assurer 
            que les programmes de protection sociale atteignent les populations les plus vulnérables.
          </p>
          <p>
            En utilisant des algorithmes de scoring transparents, nous permettons aux autorités 
            d'intervenir efficacement là où le besoin est le plus pressant.
          </p>
        </div>
        
        <div class="grid-2">
          <div class="glass-card info-card">
            <h3>Technologie</h3>
            <p>Développé avec Angular 21 et Spring Boot, garantissant performance et sécurité.</p>
          </div>
          <div class="glass-card info-card">
            <h3>Impact</h3>
            <p>Plus de 10,000 ménages déjà recensés à travers les différentes régions.</p>
          </div>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .page-container { padding: 4rem 2rem; max-width: 1000px; margin: 0 auto; }
    .hero-small { text-align: center; margin-bottom: 4rem; }
    h1 { font-size: 2.5rem; margin-bottom: 1rem; }
    .content-section { display: flex; flex-direction: column; gap: 2rem; }
    .info-card { padding: 2rem; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
    @media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr; } }
  `]
})
export class AboutComponent { }
