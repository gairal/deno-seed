import { Router } from "../deps.ts";
import { logger } from "../logger.ts";

export const skills = new Router({ prefix: "/skills" });

skills.get("/", async (ctx) => {
  try {
    const result = await Promise.resolve([{ name: "deno", level: 80 }, {
      name: "typescript",
      level: 90,
    }]);

    ctx.response.body = result;
  } catch (err) {
    logger.error(err);
  }
});
