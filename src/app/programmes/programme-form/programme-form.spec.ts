import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeForm } from './programme-form';

describe('ProgrammeForm', () => {
  let component: ProgrammeForm;
  let fixture: ComponentFixture<ProgrammeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammeForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammeForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
