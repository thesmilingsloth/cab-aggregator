import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { ApiError } from "../errors/api";
import { HttpClient, HttpRequestConfig, HttpResponse } from "./types";

export class AxiosHttpClient implements HttpClient {
  private instance: AxiosInstance;
  private authToken: string | null = null;

  constructor(baseURL: string, defaultConfig: HttpRequestConfig = {}) {
    this.instance = axios.create({
      baseURL,
      headers: defaultConfig.headers,
      timeout: defaultConfig.timeout ?? 10000,
      params: defaultConfig.params,
    });

    this.initializeInterceptors();
  }

  private initializeInterceptors() {
    this.instance.interceptors.request.use((config) => {
      return config;
    });

    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const apiError = new ApiError(
          error.message,
          error.response?.status,
          error.code,
          error,
        );

        return Promise.reject(apiError);
      },
    );
  }

  private adaptConfig(config?: HttpRequestConfig): AxiosRequestConfig {
    const adaptedConfig: AxiosRequestConfig = {
      headers: config?.headers,
      params: config?.params,
      timeout: config?.timeout,
    };

    if (this.authToken) {
      if (!adaptedConfig.headers) {
        adaptedConfig.headers = {};
      }

      adaptedConfig.headers.Authorization = `Bearer ${this.authToken}`;
    }

    return adaptedConfig;
  }

  private adaptResponse<T>(response: AxiosResponse<T>): HttpResponse<T> {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as Record<string, string>,
    };
  }

  async get<T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<T>> {
    const response = await this.instance.get<T>(url, this.adaptConfig(config));

    return this.adaptResponse(response);
  }

  async post<T = unknown>(
    url: string,
    data?: unknown,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<T>> {
    const response = await this.instance.post<T>(
      url,
      data,
      this.adaptConfig(config),
    );

    return this.adaptResponse(response);
  }

  async put<T = unknown>(
    url: string,
    data?: unknown,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<T>> {
    const response = await this.instance.put<T>(
      url,
      data,
      this.adaptConfig(config),
    );

    return this.adaptResponse(response);
  }

  async patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<T>> {
    const response = await this.instance.patch<T>(
      url,
      data,
      this.adaptConfig(config),
    );

    return this.adaptResponse(response);
  }

  async delete<T = unknown>(
    url: string,
    config?: HttpRequestConfig,
  ): Promise<HttpResponse<T>> {
    const response = await this.instance.delete<T>(
      url,
      this.adaptConfig(config),
    );

    return this.adaptResponse(response);
  }

  getAuthToken(): string | null {
    return this.authToken;
  }

  setAuthToken(token: string | null): void {
    this.authToken = token;
  }
}
