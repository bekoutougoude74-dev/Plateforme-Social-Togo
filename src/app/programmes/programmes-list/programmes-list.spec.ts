import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammesList } from './programmes-list';

describe('ProgrammesList', () => {
  let component: ProgrammesList;
  let fixture: ComponentFixture<ProgrammesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammesList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
