import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule, MatListModule, MatIconModule, MatButtonModule],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.scss',
})
export class SidebarComponent {
    navItems = [
        { label: 'Tableau de bord', icon: 'dashboard', route: '/app/dashboard', roles: ['AGENT', 'CHEF'] },
        { label: 'Ménages', icon: 'groups', route: '/app/menages', roles: ['AGENT', 'CHEF'] },
        { label: 'Programmes Sociaux', icon: 'volunteer_activism', route: '/app/programmes', roles: ['AGENT', 'CHEF'] },
        { label: 'Résidents', icon: 'person', route: '/app/residents', roles: ['AGENT', 'CHEF'] },
    ];

    constructor(private authService: AuthService) { }

    get userRole() {
        return this.authService.getRole();
    }

    isAllowed(item: any): boolean {
        return item.roles.includes(this.userRole);
    }

    logout() {
        this.authService.logout();
    }
}
