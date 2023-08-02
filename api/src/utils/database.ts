import pg from "pg";

import createLogger from "../utils/logger";

const { Pool } = pg;

const pool = new Pool({
  connectionString:
    "postgres://portalreclamo:Mo4lpBosycanZUkXnVL1uUa5PQ42WDju@dpg-cj4mq5qvvtos73ac8q80-a.oregon-postgres.render.com/portalreclamo",
  ssl: true,
  /* user: 'postgres',
  host: 'localhost',
  database: 'PortalReclamo',
  password: 'Abad957902342...',
  port: 5432,
  keepAlive: true,*/
});

pool.connect(function (err: any) {
  if (err) {
    createLogger.error(`ERROR Connect Database` + err);
  } else {
    createLogger.info(`Connect Database`);
  }
});

export default pool;
