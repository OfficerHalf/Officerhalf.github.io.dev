import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncestryStepComponent } from './ancestry-step.component';

describe('AncestryStepComponent', () => {
  let component: AncestryStepComponent;
  let fixture: ComponentFixture<AncestryStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncestryStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AncestryStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
