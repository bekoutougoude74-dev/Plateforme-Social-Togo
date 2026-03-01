import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { HouseholdService } from '../../menages/household.service';
import { Resident } from '../../models/models';

@Component({
  selector: 'app-resident-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatChipsModule, RouterModule],
  template: `
    <div class="list-container animate-fade-in">
      <header class="list-header">
        <h1 class="gradient-text">Répertoire des Résidents</h1>
        <p>Consultez la liste exhaustive de tous les individus recensés.</p>
      </header>

      <div class="table-container glass-card">
        <table mat-table [dataSource]="residents">
          <ng-container matColumnDef="nom">
            <th mat-header-cell *matHeaderCellDef>Nom complet</th>
            <td mat-cell *matCellDef="let r"> {{r.nom}} {{r.prenom}} </td>
          </ng-container>

          <ng-container matColumnDef="nationalite">
            <th mat-header-cell *matHeaderCellDef>Nationalité</th>
            <td mat-cell *matCellDef="let r"> {{r.nationalite}} </td>
          </ng-container>

          <ng-container matColumnDef="diplome">
            <th mat-header-cell *matHeaderCellDef>Dernier Diplôme</th>
            <td mat-cell *matCellDef="let r"> 
                <mat-chip-set><mat-chip>{{r.diplomeLePlusEleve}}</mat-chip></mat-chip-set>
            </td>
          </ng-container>

          <ng-container matColumnDef="chef">
            <th mat-header-cell *matHeaderCellDef>Statut</th>
            <td mat-cell *matCellDef="let r">
              @if (r.isChef) {
                <span class="badge chef">Chef de Ménage</span>
              } @else {
                <span class="badge">Résident</span>
              }
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .list-container { padding: 3rem; background: #fdfdfd; color: #333; }
    .list-header { margin-bottom: 3rem; h1 { color: #006064; } }
    .table-container { padding: 1.5rem; background: #fff; }
    .badge { padding: 4px 12px; border-radius: 12px; font-size: 0.8rem; background: #f0f0f0; color: #333; }
    .chef { background: #e0f2f1; color: #006064; font-weight: bold; }
    mat-table { width: 100%; background: transparent; }
    .mat-mdc-header-cell { color: #006064 !important; font-weight: bold; }
    .mat-mdc-cell { color: #333; }
  `]
})
export class ResidentList implements OnInit {
  residents: Resident[] = [];
  displayedColumns: string[] = ['nom', 'nationalite', 'diplome', 'chef'];

  constructor(private householdService: HouseholdService) { }

  ngOnInit() {
    this.householdService.getHouseholds().subscribe(households => {
      this.residents = households.flatMap(h => h.residents);
    });
  }
}
