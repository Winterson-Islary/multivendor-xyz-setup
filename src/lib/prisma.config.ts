import { PrismaClient } from "@orm/generated/client";
import { appConfig } from "./env.config";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (appConfig.server.node_env !== "production") globalForPrisma.prisma = prisma;
