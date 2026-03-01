import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { AuthService } from '../../auth/auth.service';
import { HouseholdService } from '../../menages/household.service';
import { Household } from '../../models/models';

@Component({
  selector: 'app-dashboard-chef',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule, MatChipsModule],
  templateUrl: './dashboard-chef.html',
  styleUrl: './dashboard-chef.scss',
})
export class DashboardChef implements OnInit {
  household: Household | null = null;
  displayedColumns: string[] = ['nom', 'prenom', 'nationalite', 'diplome'];

  constructor(
    private authService: AuthService,
    private householdService: HouseholdService
  ) { }

  ngOnInit() {
    // In a real app, we'd get the household linked to the logged-in chef
    // For this demo, we'll take the first one available
    this.householdService.getHouseholds().subscribe(data => {
      if (data.length > 0) {
        this.household = data[0];
      }
    });
  }
}
