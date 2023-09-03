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
exports.getAll = exports.getById = exports.update = exports.deleteClaim = exports.create = void 0;
const database_1 = __importDefault(require("../utils/database"));
const create = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDataBase = yield database_1.default.query(`INSERT INTO app.claim
      ( openingdate, endingdate)
      VALUES( NOW(), NOW()) RETURNING *;`);
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
const deleteClaim = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = "respuestas";
        return {
            success: true,
            data: id || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.deleteClaim = deleteClaim;
const update = (claim_id, person_id, type_id, body_claim) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDataBase = yield database_1.default.query(`UPDATE claim
      SET person_id=$2, type_id=$3, body_claim=$4
      WHERE id=$1 RETURNING *;`, [claim_id, person_id, type_id, body_claim]);
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
exports.update = update;
const getById = (claim_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDataBase = yield database_1.default.query(`SELECT app.fn_get_by_id_claim($1)::jsonb AS "data"; `, [claim_id]);
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
exports.getById = getById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDataBase = yield database_1.default.query(`SELECT app.fn_get_all_claims()::jsonb AS "data"; `);
        return {
            success: true,
            data: resultDataBase.rows[0].data || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.getAll = getAll;
