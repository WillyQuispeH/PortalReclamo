"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = void 0;
const nodemailer = require("nodemailer");
const logger_1 = __importDefault(require("../utils/logger"));
const axios_1 = __importDefault(require("axios"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const config_1 = __importDefault(require("../utils/config"));
const send = (mailOptions, attachments) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transporter = nodemailer.createTransport({
            host: config_1.default.email.emailHost,
            port: config_1.default.email.emailPort,
            secure: config_1.default.email.emailSecure,
            auth: {
                user: config_1.default.email.emailLogin,
                pass: config_1.default.email.emailPassword,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        transporter.verify().then(() => {
            logger_1.default.info({
                utils: "emailSender",
                data: "successful connection to Nodemailer",
            });
        });
        const htmlFilePath = path_1.default.join(__dirname, "../data/email.html");
        const html = fs_1.default.readFileSync(htmlFilePath, "utf8");
        const htmlContent = html.replace("%USERNAME%", mailOptions.name);
        const attachmentsData = yield Promise.all(attachments.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield axios_1.default.get(item.urlDoc, {
                responseType: "arraybuffer",
            });
            const fileContent = Buffer.from(response.data);
            return {
                filename: item.nameFile,
                content: fileContent,
            };
        })));
        const EmailSent = yield transporter.sendMail({
            from: config_1.default.email.emailFrom,
            to: mailOptions.email,
            subject: mailOptions.subject,
            html: htmlContent,
            attachments: attachmentsData,
        });
        logger_1.default.info({
            utils: "emailSender",
            data: EmailSent,
        });
        return EmailSent;
    }
    catch (error) {
        logger_1.default.error({
            utils: "emailSender",
            data: error,
        });
    }
});
exports.send = send;
