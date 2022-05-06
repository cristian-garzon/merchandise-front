import { TestBed } from '@angular/core/testing';

import { MerchandiseServiceService } from './merchandise-service.service';

describe('MerchandiseServiceService', () => {
  let service: MerchandiseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchandiseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
