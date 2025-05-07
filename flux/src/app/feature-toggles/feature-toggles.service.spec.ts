import { TestBed } from '@angular/core/testing';

import { FeatureTogglesService } from './feature-toggles.service';
import { describe, beforeEach, it, expect } from 'vitest';

describe('FeatureTogglesService', () => {
  let service: FeatureTogglesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureTogglesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
