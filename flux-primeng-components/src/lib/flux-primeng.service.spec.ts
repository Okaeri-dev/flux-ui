import { TestBed } from '@angular/core/testing';

import { FluxPrimengService } from './flux-primeng.service';

describe('FluxPrimengService', () => {
  let service: FluxPrimengService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluxPrimengService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
