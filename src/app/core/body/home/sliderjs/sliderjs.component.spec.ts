import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderjsComponent } from './sliderjs.component';

describe('SliderjsComponent', () => {
  let component: SliderjsComponent;
  let fixture: ComponentFixture<SliderjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
