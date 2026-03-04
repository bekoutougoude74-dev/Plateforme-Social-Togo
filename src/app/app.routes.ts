import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './shared/layout/public-layout';
import { MainLayoutComponent } from './shared/layout/main-layout';

export const routes: Routes = [
    // --- Pages Publiques (Landing, About, Contact) ---
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./landing/landing').then(m => m.LandingComponent)
            },
            {
                path: 'about',
                loadComponent: () => import('./landing/about/about').then(m => m.AboutComponent)
            },
            {
                path: 'contact',
                loadComponent: () => import('./landing/contact/contact').then(m => m.ContactComponent)
            },
            {
                path: 'recensement',
                loadComponent: () => import('./landing/recensement/recensement').then(m => m.RecensementPageComponent)
            },
            {
                path: 'scoring',
                loadComponent: () => import('./landing/scoring/scoring').then(m => m.ScoringPageComponent)
            },
            {
                path: 'inclusion',
                loadComponent: () => import('./landing/inclusion/inclusion').then(m => m.InclusionPageComponent)
            },
            {
                path: 'auth',
                loadChildren: () => import('./auth/auth-routing-module').then(m => m.AuthRoutingModule)
            }
        ]
    },
    // --- Pages Privées (Dashboard, etc.) ---
    {
        path: 'app',
        component: MainLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboards/dashboards-routing-module').then(m => m.DashboardsRoutingModule)
            },
            {
                path: 'menages',
                loadChildren: () => import('./menages/menages-routing-module').then(m => m.MenagesRoutingModule)
            },
            {
                path: 'programmes',
                loadChildren: () => import('./programmes/programmes-routing-module').then(m => m.ProgrammesRoutingModule)
            },
            {
                path: 'residents',
                loadChildren: () => import('./residents/residents-routing-module').then(m => m.ResidentsRoutingModule)
            }
        ]
    },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
