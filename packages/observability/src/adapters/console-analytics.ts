import { AnalyticsEvent, ObservabilityConfig } from "../core/types";
import { BaseAnalytics } from "../core/analytics";

export class ConsoleAnalytics extends BaseAnalytics {
  constructor(config: ObservabilityConfig) {
    super(config);
  }

  track(event: AnalyticsEvent) {
    console.info(
      "Track",
      event.name,
      this.enrichProperties(event.properties || {}),
    );
  }

  identify(userId: string, traits?: Record<string, unknown>) {
    console.info("Identify", userId, this.enrichProperties(traits || {}));
  }

  page(name: string, properties?: Record<string, unknown>) {
    console.info("Page View", name, this.enrichProperties(properties || {}));
  }
}
