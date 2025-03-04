import { HttpClient } from "../http";

/**
 * Base class for API services
 */
export abstract class BaseApiService {
  protected client: HttpClient;
  protected basePath: string;

  /**
   * Creates a new API service instance
   *
   * @param client The HTTP client to use for requests
   * @param basePath The base path for API endpoints
   */
  constructor(client: HttpClient, basePath: string = "") {
    this.client = client;
    this.basePath = basePath;
  }

  /**
   * Builds a full URL for an API endpoint
   *
   * @param path The endpoint path
   * @returns The full URL
   */
  protected buildUrl(path: string): string {
    return `${this.basePath}${path}`;
  }
}
