import pg from "pg";

import createLogger from "../utils/logger";

const { Pool } = pg;

const pool = new Pool({
  user: config.db_user,
  host: config.db_host,
  database: config.db_database,
  password: config.db_password,
  port: 5432,
  keepAlive: true,
});

pool.connect(function (err) {
  if (err) {
    createLogger.error(`ERROR Connect Database` + err);
  } else {
    createLogger.info(`Connect Database`);
  }
});

export default pool;
