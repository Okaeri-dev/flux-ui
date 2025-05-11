import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FluxApiResponse, fluxApiRoutes } from '@flux-models/flux-api.models';
import { FluxStoreFacade } from '@flux-store/facade/flux-store.facade';
import { MetricCard } from 'flux-utilities';
import { MessageService } from 'primeng/api';
import { catchError, finalize, map, Observable, of, share } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly messageService: MessageService = inject(MessageService);
  private readonly fluxStoreFacade: FluxStoreFacade = inject(FluxStoreFacade);

  getDashboardMetrics(user?: string): Observable<MetricCard[]> {
    this.fluxStoreFacade.setPageLevelLoader(true);
    return this.httpClient
      .post<FluxApiResponse<MetricCard[]>>(fluxApiRoutes.dashboardMetrics, { user })
      .pipe(
        map((res: FluxApiResponse<MetricCard[]>) => {
          if (res.status === 'SUCCESS') {
            return res.data;
          } else {
            throw new Error(res.error?.message);
          }
        }),
        catchError(error => {
          this.messageService.add({
            severity: 'error',
            detail: error.message ?? 'Something went wrong',
            life: 3000,
          });
          return of([]);
        }),
        finalize(() => this.fluxStoreFacade.setPageLevelLoader(false)),
        share(),
      );
  }
}
