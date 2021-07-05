import { config, log } from "./deps.ts";

config();

export const PORT = +(Deno.env.get("PORT") ?? 8000);
export const LOG_LEVEL = (Deno.env.get("LOG_LEVEL") as log.LevelName) ??
  "DEBUG";
