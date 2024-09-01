import { createEleganceServerClient } from "@singlestore/elegance-sdk/server";

export const eleganceServerClient = createEleganceServerClient("mysql", {
  connection: {
    host: process.env.SINGLE_STORE_DB_HOST,
    user: process.env.SINGLE_STORE_DB_USER,
    password: process.env.SINGLE_STORE_DB_PASSWORD,
    database: process.env.SINGLE_STORE_DB_NAME,
  },
  ai: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY,
    },
  },
});
