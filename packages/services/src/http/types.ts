export type HttpRequestConfig = {
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
  timeout?: number;
};

export type HttpResponse<T = unknown> = {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
};

export interface HttpClient {
  get<T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<T>>;

  post<T = unknown>(
    url: string,
    data?: unknown,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<T>>;

  put<T = unknown>(
    url: string,
    data?: unknown,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<T>>;

  patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<T>>;

  delete<T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<T>>;

  getAuthToken(): string | null;
  setAuthToken(token: string | null): void;
}
