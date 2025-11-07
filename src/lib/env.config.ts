import z from "zod";

const configSchema = z.object({
	next_url: z.url().default("http://localhost:3000"),
	server: z.object({
		node_env: z.string().default("development"),
		log_level: z.string().default("info"),
	}),
});

const loadConfig = () => {
	const rawConfig = {
		next_url: process.env.NEXT_PUBLIC_APP_URL,
		server: {
			node_env: process.env.NODE_ENV,
			log_level: process.env.LOG_LEVEL,
		},
	};

	try {
		return configSchema.parse(rawConfig);
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.error(
				"❌ Invalid environment configuration:",
				// error.flatten().fieldErrors,
				z.treeifyError(error),
			);
			throw new Error(
				"Invalid environment variables. Check the console for details.",
			);
		}
		throw error;
	}
};

export const appConfig = Object.freeze(loadConfig());
export type AppConfig = z.infer<typeof configSchema>;
