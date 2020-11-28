import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRaceStepComponent } from './generate-race-step.component';

describe('GenerateRaceStepComponent', () => {
  let component: GenerateRaceStepComponent;
  let fixture: ComponentFixture<GenerateRaceStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateRaceStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateRaceStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
