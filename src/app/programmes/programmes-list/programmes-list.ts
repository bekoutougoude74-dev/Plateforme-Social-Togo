import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { SocialProgramService } from '../social-program.service';
import { SocialProgram } from '../../models/models';

@Component({
  selector: 'app-programmes-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, RouterModule],
  template: `
    <div class="list-container animate-fade-in">
      <header class="list-header">
        <h1 class="gradient-text">Programmes d'Inclusion Sociale</h1>
        <div class="header-actions">
           <button mat-raised-button color="primary" routerLink="/app/programmes/nouveau" class="premium-btn">
             <mat-icon>add</mat-icon> Nouveau Programme
           </button>
        </div>
      </header>

      <div class="programs-grid">
        @for (program of programs; track program.id) {
          <mat-card class="program-card glass-card">
            <mat-card-header>
              <mat-icon mat-card-avatar>volunteer_activism</mat-icon>
              <mat-card-title>{{ program.nom }}</mat-card-title>
              <mat-card-subtitle>{{ program.description }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <div class="criteria">
                <strong>Critères :</strong>
                <mat-chip-set>
                   <mat-chip>Score min: {{ program.scoreMin }}</mat-chip>
                </mat-chip-set>
              </div>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button color="primary" [routerLink]="['/app/programmes/eligibilite']">
                Voir l'éligibilité
              </button>
            </mat-card-actions>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .list-container { padding: 3rem; background: #fdfdfd; color: #333; }
    .list-header { 
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
        margin-bottom: 4rem; 
        h1 { color: #006064; }
    }
    .programs-grid { 
        display: grid; 
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
        gap: 2.5rem; 
    }
    .program-card { 
        padding: 1.5rem; 
        border-radius: 20px;
        transition: transform 0.3s ease;
        background: #fff;
        color: #333;
    }
    .program-card:hover { transform: translateY(-8px); }
    mat-icon[mat-card-avatar] { 
        background: #e0f2f1; 
        color: #006064; 
        padding: 12px; 
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 40px;
    }
    .criteria { margin-top: 1.5rem; color: #666; }
    mat-card-subtitle { color: #555 !important; }
  `]
})
export class ProgrammesList implements OnInit {
  programs: SocialProgram[] = [];

  constructor(private programService: SocialProgramService) { }

  ngOnInit() {
    this.programService.getPrograms().subscribe(data => {
      this.programs = data;
    });
  }
}
