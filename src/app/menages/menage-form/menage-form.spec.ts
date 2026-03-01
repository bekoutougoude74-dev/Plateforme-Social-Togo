import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageForm } from './menage-form';

describe('MenageForm', () => {
  let component: MenageForm;
  let fixture: ComponentFixture<MenageForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenageForm],
    }).compileComponents();

    fixture = TestBed.createComponent(MenageForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
