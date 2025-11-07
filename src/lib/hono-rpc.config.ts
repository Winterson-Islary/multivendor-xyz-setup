import { hc } from "hono/client";
import type { AppType } from "@/app/api/[[...route]]/route";
import { appConfig } from "./env.config";

export const client = hc<AppType>(appConfig.next_url);
