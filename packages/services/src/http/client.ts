import { AxiosHttpClient } from "./axios";
import { HttpClient } from "./types";

let httpClient: HttpClient;

export function createDefaultHttpClient(baseURL: string): HttpClient {
  if (!httpClient) {
    httpClient = new AxiosHttpClient(baseURL, {
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  return httpClient;
}
