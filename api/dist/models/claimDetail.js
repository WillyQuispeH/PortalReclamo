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
exports.create = void 0;
const database_1 = __importDefault(require("../utils/database"));
const create = (claim_id, claim_body, type_id, level) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDataBase = yield database_1.default.query(`INSERT INTO app.claim_detail ( claim_id, claim_body, type_id, level)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (claim_id) DO UPDATE
       SET claim_body = EXCLUDED.claim_body, type_id = EXCLUDED.type_id, level = EXCLUDED.level RETURNING *;`, [claim_id, claim_body, type_id, level]);
        return {
            success: true,
            data: resultDataBase.rows[0] || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.create = create;
