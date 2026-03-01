import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SocialProgram, Household } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class SocialProgramService {
    private programs: SocialProgram[] = [
        { id: 1, nom: 'Novissi', description: 'Soutien aux travailleurs du secteur informel.', scoreMin: 30 },
        { id: 2, nom: 'Cantine Scolaire', description: 'Repas gratuits pour les élèves de zones rurales.', scoreMin: 50 },
        { id: 3, nom: 'Assurance Maladie', description: 'Couverture santé pour les familles vulnérables.', scoreMin: 40 }
    ];

    constructor() { }

    getPrograms(): Observable<SocialProgram[]> {
        return of(this.programs);
    }

    addProgram(program: SocialProgram): Observable<SocialProgram> {
        program.id = this.programs.length + 1;
        this.programs.push(program);
        return of(program);
    }

    getEligibleHouseholds(programId: number, households: Household[]): Household[] {
        // Logic: Vulnerable households (Score < 45) are typically eligible for social programs
        return households.filter(h => (h.score || 0) < 45);
    }
}
