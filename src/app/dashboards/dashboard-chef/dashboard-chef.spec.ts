import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChef } from './dashboard-chef';

describe('DashboardChef', () => {
  let component: DashboardChef;
  let fixture: ComponentFixture<DashboardChef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardChef],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardChef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
