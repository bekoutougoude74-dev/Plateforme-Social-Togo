import { Injectable } from '@angular/core';
import { Household, Resident } from '../models/models';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HouseholdService {
    private households: Household[] = [
        {
            id: 1,
            nomChef: 'Koffi Mensah',
            adresse: 'Quartier Adidogomé, Lomé',
            hasTv: true,
            hasRadio: true,
            hasMoto: true,
            hasVoiture: false,
            isProprietaire: false,
            score: 35,
            categorieSociale: 'Vulnérable',
            residents: [
                { nom: 'Mensah', prenom: 'Koffi', nationalite: 'Togolaise', diplomeLePlusEleve: 'BAC', trancheSalariale: '[30.000 ; 100.000[', dateNaissance: '1985-05-12', isChef: true, cni: 'TG12345', isLettre: true },
                { nom: 'Mensah', prenom: 'Abla', nationalite: 'Togolaise', diplomeLePlusEleve: 'BEPC', trancheSalariale: '[0 ; 30.000[', dateNaissance: '1990-10-20', isChef: false, cni: 'TG67890', isLettre: true }
            ]
        }
    ];

    constructor() { }

    getHouseholds(): Observable<Household[]> {
        return of(this.households);
    }

    getHouseholdById(id: number): Observable<Household | undefined> {
        return of(this.households.find(h => h.id === id));
    }

    addHousehold(household: Household): Observable<Household> {
        household.id = this.households.length + 1;
        household.score = this.calculateScore(household);
        household.categorieSociale = this.determineCategory(household.score);
        this.households.push(household);
        return of(household);
    }

    private calculateScore(household: Household): number {
        let score = 0;
        if (household.hasTv || household.hasRadio) score += 5;
        if (household.hasMoto) score += 5;
        if (household.hasVoiture) score += 10;
        if (household.isProprietaire) score += 20;

        // Highest salary in the household
        const maxSalary = Math.max(...household.residents.map(r => this.salaryToPoints(r.trancheSalariale)));
        score += maxSalary;

        return score;
    }

    private salaryToPoints(tranche: string): number {
        switch (tranche) {
            case '[0 ; 30.000[': return 10;
            case '[30.000 ; 100.000[': return 20;
            case '[100.000 ; 200.000[': return 30;
            case '[200.000 ; 700.000[': return 40;
            case '[700.000 ; 1.000.000[': return 45;
            case '[1.000.000 ; plus[': return 55;
            default: return 0;
        }
    }

    private determineCategory(score: number): string {
        if (score < 20) return 'Très vulnérable';
        if (score < 45) return 'Vulnérable';
        if (score <= 55) return 'À risque';
        if (score <= 70) return 'Non vulnérable';
        if (score <= 85) return 'Riche';
        return 'Très riche';
    }
}
