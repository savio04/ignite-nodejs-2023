import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  PG_URL: z.string(),
  PORT: z.number().default(3001),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("Invalid enviroment variable", _env.error.format());

  throw new Error("Invalid enviroment variable");
}

export const config = _env.data;