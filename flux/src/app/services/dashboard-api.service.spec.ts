import { TestBed } from '@angular/core/testing';

import { DashboardApiService } from './dashboard-api.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { MessageService } from 'primeng/api';

describe('DashboardApiService', () => {
  let service: DashboardApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: { post: vi.fn(() => of({})) } },
        { provide: MessageService, useValue: { add: vi.fn() } },
      ],
    });
    service = TestBed.inject(DashboardApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
