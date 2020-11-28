import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureStepComponent } from './culture-step.component';

describe('CultureStepComponent', () => {
  let component: CultureStepComponent;
  let fixture: ComponentFixture<CultureStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultureStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
