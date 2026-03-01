import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HouseholdService } from '../../menages/household.service';

@Component({
  selector: 'app-dashboard-agent',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './dashboard-agent.html',
  styleUrl: './dashboard-agent.scss',
})
export class DashboardAgent implements OnInit {
  stats = {
    totalMenages: 0,
    vulnerables: 0,
    programmesActifs: 2
  };

  constructor(private householdService: HouseholdService) { }

  ngOnInit() {
    this.householdService.getHouseholds().subscribe(data => {
      this.stats.totalMenages = data.length;
      this.stats.vulnerables = data.filter(h => (h.score || 0) < 45).length;
    });
  }
}
