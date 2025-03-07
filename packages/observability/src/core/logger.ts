import { Logger, LogLevel, ObservabilityConfig } from "./types";

export abstract class BaseLogger implements Logger {
  constructor(protected readonly config: ObservabilityConfig) {}

  abstract log(
    level: LogLevel,
    message: string,
    meta?: Record<string, unknown>,
  ): void;

  debug(message: string, meta?: Record<string, unknown>): void {
    this.log("debug", message, this.enrichMeta(meta));
  }

  info(message: string, meta?: Record<string, unknown>): void {
    this.log("info", message, this.enrichMeta(meta));
  }

  warn(message: string, meta?: Record<string, unknown>): void {
    this.log("warn", message, this.enrichMeta(meta));
  }

  error(message: string, meta?: Record<string, unknown>): void {
    this.log("error", message, this.enrichMeta(meta));
  }

  private enrichMeta(meta?: Record<string, unknown>): Record<string, unknown> {
    return {
      ...meta,
      service: this.config.serviceName,
      env: this.config.env,
      version: this.config.version,
      timestamp: new Date().toISOString(),
    };
  }
}
