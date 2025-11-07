import { Hono } from "hono";
import { apiResponse } from "@/server/shared/api-response.util";

export const healthCheckController = new Hono();

healthCheckController.get("/", async (c) => {
	return c.json(apiResponse.success("API server is up and running"));
});
