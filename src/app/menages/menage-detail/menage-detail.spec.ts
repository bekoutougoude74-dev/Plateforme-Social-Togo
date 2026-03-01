import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageDetail } from './menage-detail';

describe('MenageDetail', () => {
  let component: MenageDetail;
  let fixture: ComponentFixture<MenageDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenageDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(MenageDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
