export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "postgres");

  const connection = {
    connection: {
      connectionString: env("DATABASE_URL"),
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: env.bool("DATABASE_SSL", false) && {
        key: env("DATABASE_SSL_KEY").replace(/\\n/g, "\n"),
        cert: env("DATABASE_SSL_CERT").replace(/\\n/g, "\n"),
        ca: env("DATABASE_SSL_CA").replace(/\\n/g, "\n"),
        rejectUnauthorized: env.bool("DATABASE_SSL_REJECT_UNAUTHORIZED", true),
      },
      debug: true,
      schema: env("DATABASE_SCHEMA", "public"),
    },
    pool: {
      min: env.int("DATABASE_POOL_MIN", 2),
      max: env.int("DATABASE_POOL_MAX", 10),
    },
  };

  return {
    connection: {
      client,
      ...connection,
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
