import { Hono } from "hono";
import { cors } from "hono/cors";

const SECURITY_HEADERS: Record<string, string> = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https://images.unsplash.com",
    "connect-src 'self'",
    "frame-ancestors *",
  ].join("; "),
};

const app = new Hono();

app.use(
  "*",
  cors({ origin: "https://portfolio.jamilharun.workers.dev" })
);

app.use("*", async (c, next) => {
  await next();
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    c.header(key, value);
  }
});

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.get("/ping", (c) => c.text("pong", 200));

export default app;
