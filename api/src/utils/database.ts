import pg from "pg";
import config from "./config";
import createLogger from "../utils/logger";

const pool = new pg.Pool({
  connectionString: config.database_connection,
});

pool.connect(function (err: any) {
  if (err) {
    createLogger.error(`ERROR Connect Database` + err);
  } else {
    createLogger.info(`Connect Database`);
  }
});

export default pool;
