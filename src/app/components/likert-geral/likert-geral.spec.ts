import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikertGeral } from './likert-geral';

describe('LikertGeral', () => {
  let component: LikertGeral;
  let fixture: ComponentFixture<LikertGeral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikertGeral],
    }).compileComponents();

    fixture = TestBed.createComponent(LikertGeral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
