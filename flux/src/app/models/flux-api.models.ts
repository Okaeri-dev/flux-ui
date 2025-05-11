import { environment } from 'environments/environment';

export const fluxApiRoutes = {
  baseUrl: environment.API_URL,
  dashboardMetrics: `${environment.API_URL}/getDashboardMetrics`,
};
export interface FluxApiResponse<T = unknown> {
  status: 'SUCCESS' | 'ERROR';
  data: T;
  error?: Error;
}
