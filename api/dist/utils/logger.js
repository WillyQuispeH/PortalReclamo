"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const datetoString = () => {
    const offset = new Date().getTimezoneOffset();
    const yourDate = new Date(new Date().getTime() + offset * 60 * 1000);
    return yourDate.toISOString().split("T")[0];
};
exports.default = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.format.json()),
    transports: [
        new winston_1.transports.File({
            maxsize: 51200,
            filename: `${__dirname}/../../../logs/log_api-${datetoString()}.log`,
        }),
        new winston_1.transports.Console({ level: "debug" }),
    ],
});
