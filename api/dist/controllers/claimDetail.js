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
exports.create = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const ModelClaimDetail = __importStar(require("../models/claimDetail"));
const ModelClaimPerson = __importStar(require("../models/claimPerson"));
const ModelClaimStatus = __importStar(require("../models/claimStatus"));
const ModelPerson = __importStar(require("../models/person"));
const ModelEmail = __importStar(require("../models/email"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { claim_id, claim_body, type_id, person_id } = req.body;
        const level = "Urgente";
        const result = yield ModelClaimDetail.create(claim_id, claim_body, type_id, level);
        if (!result.success) {
            logger_1.default.error({
                model: "ModelClaim/create",
                error: result.error,
            });
            res.status(500).json({ success: false, data: null, error: result.error });
            return;
        }
        const resultModel = yield ModelClaimPerson.create(claim_id, person_id);
        logger_1.default.info({
            model: "ModelClaim/create",
            data: result.data,
        });
        const resultDataBase = yield ModelClaimStatus.create(claim_id, "Recibido");
        const resultPerson = yield ModelPerson.getById(person_id);
        console.log(resultPerson);
        const { data } = resultPerson;
        const mailOptionsT = {
            subject: "Reclamo procesado correctamente",
            name: data.name,
            paternalLastName: data.paternalLastName,
            maternalLastName: data.maternalLastName,
            email: data.email,
        };
        const attachments = [];
        const sendEmail = yield ModelEmail.send(mailOptionsT, attachments);
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({ success: false, data: null, error: e });
    }
});
exports.create = create;
