
export default {
    dialect: "postgresql",
    schema: "./utils/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
      url: process.env.NEON_PUBLIC_DATABASE_URL,
      connectionString:
      process.env.NEON_PUBLIC_DATABASE_URL,
    },
  };
  
