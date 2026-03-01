import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleMenages } from './eligible-menages';

describe('EligibleMenages', () => {
  let component: EligibleMenages;
  let fixture: ComponentFixture<EligibleMenages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EligibleMenages],
    }).compileComponents();

    fixture = TestBed.createComponent(EligibleMenages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
