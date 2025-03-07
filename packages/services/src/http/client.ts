import { Analytics, Logger } from "@repo/observability/core";
import { AxiosHttpClient } from "./axios";
import { HttpClient } from "./types";

let httpClient: HttpClient;

export function createDefaultHttpClient(
  baseURL: string,
  options?: {
    logger?: Logger;
    analytics?: Analytics;
  },
): HttpClient {
  if (!httpClient) {
    httpClient = new AxiosHttpClient(
      baseURL,
      {
        timeout: 10000,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
      options,
    );
  }

  return httpClient;
}
