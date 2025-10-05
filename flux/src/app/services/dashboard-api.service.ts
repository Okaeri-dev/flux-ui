import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
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
  private readonly platformId = inject(PLATFORM_ID);

  getDashboardMetrics(user?: string): Observable<MetricCard[]> {
    if (!isPlatformBrowser(this.platformId)) {
      return of([]);
    }
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
          if (isPlatformBrowser(this.platformId)) {
            this.messageService.add({
              severity: 'error',
              detail: error.message ?? 'Something went wrong',
              life: 10000,
            });
          }
          return of([]);
        }),
        finalize(() => this.fluxStoreFacade.setPageLevelLoader(false)),
        share(),
      );
  }
}
