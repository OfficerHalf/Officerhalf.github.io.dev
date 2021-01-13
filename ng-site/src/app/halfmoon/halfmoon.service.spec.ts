import { TestBed } from '@angular/core/testing';

import { HalfmoonService } from './halfmoon.service';

describe('HalfmoonService', () => {
  let service: HalfmoonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HalfmoonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
