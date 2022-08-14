import { TestBed } from '@angular/core/testing';

import { PrincipalInfoService } from './principal-info.service';

describe('PrincipalInfoService', () => {
  let service: PrincipalInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipalInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
