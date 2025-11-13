import { defineConfig } from "prisma/config";
import { appConfig } from "./src/lib/env.config";

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
	},
	engine: "classic",
	datasource: {
		url: appConfig.db.url,
	},
});
