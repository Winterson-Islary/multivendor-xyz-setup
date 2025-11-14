import { PrismaClient } from "@orm/generated/client";
import { serverConfig } from "./server.env";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (serverConfig.server.node_env !== "production")
	globalForPrisma.prisma = prisma;
