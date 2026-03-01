import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-scoring-page',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    template: `
    <div class="page-container animate-fade-in">
      <header class="page-header">
        <h1 class="gradient-text">Scoring Social Intelligent</h1>
        <p>Une méthode scientifique pour garantir l'équité des aides.</p>
      </header>

      <div class="logic-box glass-card">
        <h2>L'Algorithme de Vulnérabilité</h2>
        <p>
          Notre système évalue chaque ménage sur une échelle de 0 à 100 points. 
          Plus le score est élevé, plus le ménage est considéré comme vulnérable.
        </p>

        <div class="criteria-grid">
          <div class="criterion">
            <mat-icon>home</mat-icon>
            <h3>Habitat</h3>
            <p>Type de logement, accès à l'eau potable et à l'électricité.</p>
          </div>
          <div class="criterion">
            <mat-icon>kitchen</mat-icon>
            <h3>Équipement</h3>
            <p>Possession de biens durables (TV, Radio, Réfrigérateur, etc.).</p>
          </div>
          <div class="criterion">
            <mat-icon>family_restroom</mat-icon>
            <h3>Composition</h3>
            <p>Nombre d'enfants, personnes âgées ou personnes en situation de handicap.</p>
          </div>
          <div class="criterion">
            <mat-icon>school</mat-icon>
            <h3>Éducation</h3>
            <p>Niveau d'instruction du chef de ménage et scolarisation des enfants.</p>
          </div>
        </div>
      </div>

      <section class="threshold-info">
        <h2>Catégories de Soutien</h2>
        <div class="thresholds">
          <div class="t-card red"><strong>80 - 100 :</strong> Extrême Urgence</div>
          <div class="t-card orange"><strong>50 - 79 :</strong> Vulnérabilité Élevée</div>
          <div class="t-card blue"><strong>20 - 49 :</strong> Soutien Modéré</div>
        </div>
      </section>
    </div>
  `,
    styles: [`
    .page-container { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; }
    .page-header { text-align: center; margin-bottom: 4rem; }
    .logic-box { padding: 4rem; margin-bottom: 4rem; }
    .criteria-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-top: 3rem; }
    .criterion { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
    .criterion mat-icon { font-size: 40px; width: 40px; height: 40px; color: #ffb300; }
    .threshold-info { text-align: center; }
    .thresholds { display: flex; justify-content: center; gap: 2rem; margin-top: 2rem; flex-wrap: wrap; }
    .t-card { padding: 1.5rem 2rem; border-radius: 12px; font-size: 1.1rem; border: 1px solid rgba(0,0,0,0.1); }
    .red { background: #ffebee; color: #c62828; }
    .orange { background: #fff3e0; color: #ef6c00; }
    .blue { background: #e3f2fd; color: #1565c0; }
  `]
})
export class ScoringPageComponent { }
