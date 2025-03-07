import React, { createContext, useContext } from "react";

import { Logger } from "../core/types";

const LoggerContext = createContext<Logger | null>(null);

export const LoggerProvider = ({
  children,
  logger,
}: {
  children: React.ReactNode;
  logger: Logger;
}) => {
  return (
    <LoggerContext.Provider value={logger}>{children}</LoggerContext.Provider>
  );
};

export const useLogger = () => {
  const logger = useContext(LoggerContext);

  if (!logger) {
    throw new Error("useLogger must be used within a LoggerProvider");
  }

  return logger;
};
