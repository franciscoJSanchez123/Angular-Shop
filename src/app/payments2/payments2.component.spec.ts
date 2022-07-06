import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Payments2Component } from './payments2.component';

describe('Payments2Component', () => {
  let component: Payments2Component;
  let fixture: ComponentFixture<Payments2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Payments2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Payments2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
