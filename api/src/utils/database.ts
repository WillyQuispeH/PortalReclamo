import pg from "pg";
import config from "./config";
import createLogger from "../utils/logger";

const { Pool } = pg;

const pool = new Pool({
  connectionString: config.database_connection,
  ssl: false,
});

pool.connect(function (err: any) {
  if (err) {
    createLogger.error(`ERROR Connect Database` + err);
  } else {
    createLogger.info(`Connect Database`);
  }
});

export default pool;
