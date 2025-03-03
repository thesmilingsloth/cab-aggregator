import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const dotenv = createEnv({
  clientPrefix: "PUBLIC_",

  client: {
    PUBLIC_API_BASE_URL: z.string().url(),
  },

  runtimeEnvStrict: {
    PUBLIC_API_BASE_URL: process.env.PUBLIC_API_BASE_URL,
  },
});
