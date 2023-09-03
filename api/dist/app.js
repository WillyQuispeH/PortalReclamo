"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes = __importStar(require("./routes"));
const logger_1 = require("./middlewares/logger");
const auth_1 = require("./middlewares/auth");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express_1.default.json());
        this.server.use((0, cors_1.default)({
            origin: ["http://localhost:8000", "http://localhost:4400"],
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
            allowedHeaders: ["Content-Type,Authorization", "Content-Type", "id"],
        }));
        this.server.use(express_1.default.urlencoded({ extended: false }));
        const storage = multer_1.default.diskStorage({
            destination: path_1.default.join(__dirname, "public/uploads"),
            filename: (req, file, cb) => {
                cb(null, new Date().getTime() + path_1.default.extname(file.originalname));
            },
        });
        this.server.use((0, multer_1.default)({ storage }).array("files"));
    }
    routes() {
        this.server.use("/api/claim", auth_1.auth, logger_1.reqLogger, routes.ClaimRouter);
        this.server.use("/api/claimDetail", auth_1.auth, logger_1.reqLogger, routes.ClaimDetailRouter);
        this.server.use("/api/person", auth_1.auth, logger_1.reqLogger, routes.PersonRouter);
        this.server.use("/api/typeclaim", auth_1.auth, logger_1.reqLogger, routes.TypeClaimRouter);
        this.server.use("/api/file", auth_1.auth, logger_1.reqLogger, routes.FileRouter);
        this.server.use("/api/user", auth_1.auth, logger_1.reqLogger, routes.UserRouter);
    }
}
exports.default = new App().server;
