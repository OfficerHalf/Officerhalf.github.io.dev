import { TestBed } from '@angular/core/testing';

import { MobileFirstService } from './mobile-first.service';

describe('MobileFirstServiceService', () => {
  let service: MobileFirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileFirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
