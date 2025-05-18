import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDashboardComponent } from './landing-dashboard.component';
import { MetricCardComponent } from 'flux-utilities';
import { MockComponent } from 'ng-mocks';
import { DashboardApiService } from '@flux-services/dashboard-api.service';
import { of } from 'rxjs';
import { fluxStoreFacadeMock } from '@flux-store/facade/flux-store.facade.mock';
import { FluxStoreFacade } from '@flux-store/facade/flux-store.facade';

describe('LandingDashboardComponent', () => {
  let component: LandingDashboardComponent;
  let fixture: ComponentFixture<LandingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [LandingDashboardComponent] })
      .overrideComponent(LandingDashboardComponent, {
        remove: { imports: [MetricCardComponent] },
        add: { imports: [MockComponent(MetricCardComponent)] },
      })
      .compileComponents();

    fixture = TestBed.configureTestingModule({
      providers: [
        { provide: DashboardApiService, useValue: { getDashboardMetrics: vi.fn(() => of([])) } },
        { provide: FluxStoreFacade, useValue: fluxStoreFacadeMock },
      ],
    })
      .overrideComponent(LandingDashboardComponent, {
        remove: { imports: [MetricCardComponent] },
        add: { imports: [MockComponent(MetricCardComponent)] },
      })
      .createComponent(LandingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
