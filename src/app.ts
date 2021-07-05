import { Application } from "./deps.ts";
import { PORT } from "./config.ts";
import { skills } from "./routes/index.ts";

const setup = () => {
  const app = new Application();

  app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
      `Listening on: ${secure ? "https://" : "http://"}${hostname ??
        "localhost"}:${port}`,
    );
  });

  // ROUTES
  app.use(skills.routes());

  return app;
};

export const start = () => {
  const app = setup();
  return app.listen({ port: PORT });
};
