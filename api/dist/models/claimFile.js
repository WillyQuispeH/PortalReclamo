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
exports.remove = exports.getById = exports.create = void 0;
const database_1 = __importDefault(require("../utils/database"));
const create = (claim_id, url, public_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDataBase = yield database_1.default.query(`INSERT INTO app.claim_file
      (claim_id, url, public_id)
      VALUES($1, $2, $3) RETURNING *;`, [claim_id, url, public_id]);
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
const getById = (claim_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDataBase = yield database_1.default.query(`SELECT id, claim_id, url, public_id
      FROM app.claim_file WHERE claim_id=$1;`, [claim_id]);
        return {
            success: true,
            data: resultDataBase.rows || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.getById = getById;
const remove = (public_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDataBase = yield database_1.default.query(`DELETE FROM app.claim_file
      WHERE public_id=$1;`, [public_id]);
        return {
            success: true,
            data: resultDataBase.rows || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.remove = remove;
