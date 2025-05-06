import { TestBed } from '@angular/core/testing';

import { FluxUtilitiesService } from './flux-utilities.service';
import { describe, beforeEach, it, expect } from 'vitest';

describe('FluxUtilitiesService', () => {
  let service: FluxUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluxUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
