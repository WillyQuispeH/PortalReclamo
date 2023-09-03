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
exports.deleteClaim = exports.getById = exports.getAll = exports.update = exports.create = void 0;
const ModelClaim = __importStar(require("../models/claim"));
const logger_1 = __importDefault(require("../utils/logger"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield ModelClaim.create();
        if (!result.success) {
            logger_1.default.error({
                model: "ModelClaim/create",
                error: result.error,
            });
            res.status(500).json({ success: false, data: null, error: result.error });
            return;
        }
        logger_1.default.info({
            model: "ModelClaim/create",
            data: result.data,
        });
        res.status(200).json(result);
    }
    catch (e) {
        res.status(200).json({ success: false, data: null, error: e });
    }
});
exports.create = create;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { claim_id } = req.body;
        const result = yield ModelClaim.getById(claim_id);
        res
            .status(200)
            .json({ success: true, data: result.data.data, error: null });
    }
    catch (e) {
        res.status(200).json({ success: false, data: null, error: e });
    }
});
exports.getById = getById;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const result = yield ModelClaim.update(id);
        res.status(200).json({ success: true, data: result, error: null });
    }
    catch (e) {
        res.status(200).json({ success: false, data: null, error: e });
    }
});
exports.update = update;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield ModelClaim.getAll();
        res.status(200).json({ success: true, data: result.data, error: null });
    }
    catch (e) {
        res.status(200).json({ success: false, data: null, error: e });
    }
});
exports.getAll = getAll;
const deleteClaim = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const result = yield ModelClaim.deleteClaim(id);
        res.status(200).json({ success: true, data: result, error: null });
    }
    catch (e) {
        res.status(200).json({ success: false, data: null, error: e });
    }
});
exports.deleteClaim = deleteClaim;
