import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";
import { appConfig } from "@/lib/env.config";
import { registerRoutes } from "@/server/routes";

const app = new Hono().basePath("/api");
app.use(
	cors({
		origin: appConfig.next_url,
		allowHeaders: [
			"X-Custom-Header",
			"Upgrade-Insecure-Requests",
			"Content-Type",
			"Authorization",
		],
		allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS", "PATCH"],
		exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
		maxAge: 600,
		credentials: true,
	}),
);

registerRoutes(app);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof app;
