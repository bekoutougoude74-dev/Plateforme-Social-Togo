import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenagesList } from './menages-list';

describe('MenagesList', () => {
  let component: MenagesList;
  let fixture: ComponentFixture<MenagesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenagesList],
    }).compileComponents();

    fixture = TestBed.createComponent(MenagesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
