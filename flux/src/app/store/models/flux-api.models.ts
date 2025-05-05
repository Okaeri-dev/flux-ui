export interface ApiResponse<T = unknown> {
  status: 'SUCCESS' | 'ERROR';
  data?: T;
  error?: Error;
}
