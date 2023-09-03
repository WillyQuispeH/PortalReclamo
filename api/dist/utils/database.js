"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("../utils/logger"));
const { Pool } = pg_1.default;
const pool = new Pool({
    connectionString: config_1.default.database_connection,
    ssl: true,
});
pool.connect(function (err) {
    if (err) {
        logger_1.default.error(`ERROR Connect Database` + err);
    }
    else {
        logger_1.default.info(`Connect Database`);
    }
});
exports.default = pool;
