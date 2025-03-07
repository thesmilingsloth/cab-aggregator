import React, { createContext, useContext } from "react";

import { Analytics } from "../core/types";

const AnalyticsContext = createContext<Analytics | null>(null);

export const AnalyticsProvider = ({
  children,
  analytics,
}: {
  children: React.ReactNode;
  analytics: Analytics;
}) => {
  return (
    <AnalyticsContext.Provider value={analytics}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const analytics = useContext(AnalyticsContext);

  if (!analytics) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider");
  }

  return analytics;
};
