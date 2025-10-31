import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
	// Database configuration - you'll need to configure this based on your database
	// Example for SQLite:
	// database: {
	//   provider: "sqlite",
	//   url: process.env.DATABASE_URL || "./db.sqlite",
	// },
	
	// Example for PostgreSQL:
	// database: {
	//   provider: "postgres",
	//   url: process.env.DATABASE_URL,
	// },
	
	// Secret key for session encryption
	secret: process.env.BETTER_AUTH_SECRET || "change-me-in-production",
	
	// Base URL for your application
	baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
	
	// Plugins - nextCookies is required for server actions to set cookies properly
	plugins: [nextCookies()],
});

