export type LogLevel = "debug" | "info" | "warn" | "error";

export interface Logger {
  log(level: LogLevel, message: string, meta?: Record<string, unknown>): void;
  debug(message: string, meta?: Record<string, unknown>): void;
  info(message: string, meta?: Record<string, unknown>): void;
  warn(message: string, meta?: Record<string, unknown>): void;
  error(message: string, meta?: Record<string, unknown>): void;
}

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
}

export interface Analytics {
  track(event: AnalyticsEvent): void;
  identify(userId: string, traits?: Record<string, unknown>): void;
  page(page: string, properties?: Record<string, unknown>): void;
}

export interface ObservabilityConfig {
  serviceName: string;
  version: string;
  env: "development" | "production";
}
