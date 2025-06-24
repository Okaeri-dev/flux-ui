import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DashboardApiService } from '@flux-services/dashboard-api.service';
import { FluxStoreFacade } from '@flux-store/facade/flux-store.facade';
import { MetricCard, MetricCardComponent } from 'flux-utilities';
import { Observable } from 'rxjs';

@Component({
  selector: 'flux-landing-dashboard',
  imports: [CommonModule, MetricCardComponent],
  templateUrl: './landing-dashboard.component.html',
  styleUrl: './landing-dashboard.component.scss',
})
export class LandingDashboardComponent {
  private readonly fluxStoreFacade: FluxStoreFacade = inject(FluxStoreFacade);
  private readonly dashboardApiService: DashboardApiService = inject(DashboardApiService);

  metricCards$: Observable<MetricCard[]> = this.dashboardApiService.getDashboardMetrics();
  loading$: Observable<boolean> = this.fluxStoreFacade.getLoading$;

  handleMetricCardClick(event: MetricCard) {
    // TODO: implement click event
    return event;
  }
}
