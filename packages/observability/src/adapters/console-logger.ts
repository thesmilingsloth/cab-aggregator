import { BaseLogger } from "../core/logger";
import { LogLevel } from "../core/types";

export class ConsoleLogger extends BaseLogger {
  log(level: LogLevel, message: string, meta?: Record<string, unknown>): void {
    console[level](`[${this.config.serviceName}] ${message}`, meta);
  }
}
