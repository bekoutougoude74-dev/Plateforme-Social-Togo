import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { SocialProgramService } from '../social-program.service';
import { SocialProgram } from '../../models/models';

@Component({
  selector: 'app-programme-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  templateUrl: './programme-form.html',
  styleUrl: './programme-form.scss',
})
export class ProgrammeForm implements OnInit {
  programForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private programService: SocialProgramService,
    private router: Router
  ) {
    this.programForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      scoreMin: [40, [Validators.required, Validators.min(0), Validators.max(100)]],
      budget: [0, Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.programForm.valid) {
      const newProgram: SocialProgram = this.programForm.value;
      this.programService.addProgram(newProgram).subscribe(() => {
        this.router.navigate(['/app/programmes']);
      });
    }
  }
}
