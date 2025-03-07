import { Analytics, AnalyticsEvent, ObservabilityConfig } from "./types";

export abstract class BaseAnalytics implements Analytics {
  constructor(protected readonly config: ObservabilityConfig) {}

  abstract track(event: AnalyticsEvent): void;
  abstract identify(userId: string, traits?: Record<string, unknown>): void;
  abstract page(name: string): void;

  protected enrichProperties(
    properties?: Record<string, unknown>,
  ): Record<string, unknown> {
    return {
      ...properties,
      service: this.config.serviceName,
      env: this.config.env,
      version: this.config.version,
      timestamp: new Date().toISOString(),
    };
  }
}
