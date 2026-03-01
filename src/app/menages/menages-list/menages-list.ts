import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { HouseholdService } from '../household.service';
import { Household } from '../../models/models';

@Component({
  selector: 'app-menages-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './menages-list.html',
  styleUrl: './menages-list.scss',
})
export class MenagesList implements OnInit {
  displayedColumns: string[] = ['chef', 'adresse', 'residents', 'score', 'categorie', 'actions'];
  dataSource: Household[] = [];
  filteredData: Household[] = [];

  constructor(private householdService: HouseholdService) { }

  ngOnInit() {
    this.householdService.getHouseholds().subscribe(data => {
      this.dataSource = data;
      this.filteredData = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredData = this.dataSource.filter(h =>
      h.nomChef.toLowerCase().includes(filterValue) ||
      h.adresse.toLowerCase().includes(filterValue)
    );
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'Très vulnérable': return 'warn';
      case 'Vulnérable': return 'accent';
      case 'À risque': return 'primary';
      default: return '';
    }
  }
}
