import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FluxApiResponse, fluxApiRoutes } from '@flux-models/flux-api.models';
import { MetricCard } from 'flux-utilities';
import { MessageService } from 'primeng/api';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardApiService {
  private readonly httpClient = inject(HttpClient);
  public readonly messageService: MessageService = inject(MessageService);

  getDashboardMetrics(user?: string): Observable<MetricCard[]> {
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
      );
  }
}
