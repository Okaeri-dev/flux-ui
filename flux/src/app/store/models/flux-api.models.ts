export interface ApiResponse<T = unknown> {
  data?: T;
  error?: Error;
}
