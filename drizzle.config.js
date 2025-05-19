/*import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql", // This is correct
  schema: "./configs/schema.js", // Add the leading ./
  dbCredentials: {
    // Use connectionString instead of url
    url: process.env.NEXT_PUBLIC_DATABASE_STRING || 'postgresql://neondb_owner:npg_6fuNEwgqpV8T@ep-shrill-rain-a19tlums-pooler.ap-southeast-1.aws.neon.tech/Ai-Study-Material-Gen?sslmode=require'
  }
});*/


/**
 * To run Drizzle Studio, use the following command in your terminal:
 * 
 * npx -kit studidrizzleo
 * 
 * Make sure your drizzle.config.js is properly configured and your database is accessible.
 */
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './configs/schema.js', // Change .ts to .js
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_STRING || 'postgresql://neondb_owner:npg_6fuNEwgqpV8T@ep-shrill-rain-a19tlums-pooler.ap-southeast-1.aws.neon.tech/Ai-Study-Material-Gen?sslmode=require',
  },
});