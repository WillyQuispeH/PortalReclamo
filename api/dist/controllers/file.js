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
exports.remove = exports.add = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const cloudinary_1 = require("cloudinary");
const config_1 = __importDefault(require("../utils/config"));
const ModelClaimFile = __importStar(require("../models/claimFile"));
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloudinary_name || "dzfg8xnxn",
    api_key: config_1.default.cloudinary_api_key || "734242724172826",
    api_secret: config_1.default.cloudinary_secret || "1_K4cx2TRHcbd3URjmuHJ_oJU-Y",
});
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { claim_id } = req.body;
        const files = req.files;
        const results = [];
        if (files && files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const result = yield cloudinary_1.v2.uploader.upload(file.path);
                const resultModel = yield ModelClaimFile.create(claim_id, result.url, result.public_id);
                results.push(resultModel.data);
            }
        }
        logger_1.default.info({
            model: "file/add",
            data: req.body,
        });
        res.status(200).json({ success: true, data: results, error: null });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ success: false, data: null, error: e });
    }
});
exports.add = add;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { public_id, claim_id } = req.body;
        const result = yield cloudinary_1.v2.uploader.destroy(public_id);
        const resultModel = yield ModelClaimFile.remove(public_id);
        const resultModelData = yield ModelClaimFile.getById(claim_id);
        logger_1.default.info({
            model: "file/remove",
            data: req.body,
        });
        res.status(200).json({ success: true, data: resultModelData.data, error: null });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ success: false, data: null, error: e });
    }
});
exports.remove = remove;
