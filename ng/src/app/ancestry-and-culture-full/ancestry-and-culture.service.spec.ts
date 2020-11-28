import { TestBed } from '@angular/core/testing';

import { AncestryAndCultureService } from './ancestry-and-culture.service';

describe('AncestryAndCultureService', () => {
  let service: AncestryAndCultureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AncestryAndCultureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
