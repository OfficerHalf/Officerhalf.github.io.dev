import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitDisplayComponent } from './trait-display.component';

describe('TraitDisplayComponent', () => {
  let component: TraitDisplayComponent;
  let fixture: ComponentFixture<TraitDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
