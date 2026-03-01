import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HouseholdService } from '../household.service';
import { Household } from '../../models/models';

@Component({
  selector: 'app-menage-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './menage-form.html',
  styleUrl: './menage-form.scss',
})
export class MenageForm implements OnInit {
  householdForm: FormGroup;
  tranchesSalaires = [
    '[0 ; 30.000[',
    '[30.000 ; 100.000[',
    '[100.000 ; 200.000[',
    '[200.000 ; 700.000[',
    '[700.000 ; 1.000.000[',
    '[1.000.000 ; plus['
  ];

  constructor(
    private fb: FormBuilder,
    private householdService: HouseholdService,
    private router: Router
  ) {
    this.householdForm = this.fb.group({
      chef: this.fb.group({
        nomChef: ['', Validators.required],
        hasTv: [false],
        hasRadio: [false],
        hasMoto: [false],
        hasVoiture: [false],
        isProprietaire: [false],
        adresse: ['', Validators.required]
      }),
      residents: this.fb.array([])
    });
  }

  ngOnInit() {
    this.addResident(); // Add the chef as first resident by default
  }

  get residents() {
    return this.householdForm.get('residents') as FormArray;
  }

  get chefGroup() {
    return this.householdForm.get('chef') as FormGroup;
  }

  addResident() {
    const residentForm = this.fb.group({
      cni: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      nationalite: ['Togolaise', Validators.required],
      diplomeLePlusEleve: ['Aucun'],
      isLettre: [false],
      trancheSalariale: ['[0 ; 30.000[', Validators.required],
      dateNaissance: ['', Validators.required],
      isChef: [this.residents.length === 0]
    });
    this.residents.push(residentForm);
  }

  removeResident(index: number) {
    if (this.residents.length > 1) {
      this.residents.removeAt(index);
    }
  }

  onSubmit() {
    if (this.householdForm.valid) {
      const formValue = this.householdForm.value;
      const household: Household = {
        ...formValue.chef,
        residents: formValue.residents
      };

      this.householdService.addHousehold(household).subscribe(() => {
        this.router.navigate(['/app/menages']);
      });
    }
  }
}
