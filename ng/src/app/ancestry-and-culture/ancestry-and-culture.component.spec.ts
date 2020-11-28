import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncestryAndCultureComponent } from './ancestry-and-culture.component';

describe('AncestryAndCultureComponent', () => {
  let component: AncestryAndCultureComponent;
  let fixture: ComponentFixture<AncestryAndCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncestryAndCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AncestryAndCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
