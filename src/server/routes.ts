import type { Hono } from "hono";
import { healthCheckController } from "./features/health-check/health-check.controller";

export function registerRoutes(app: Hono) {
	app.route("/health", healthCheckController);
}
