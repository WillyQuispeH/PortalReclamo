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
exports.remove = exports.update = exports.create = exports.getAll = void 0;
const database_1 = __importDefault(require("../utils/database"));
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.query(`SELECT id, typename
      FROM app.typeclaim;
      `);
        return {
            success: true,
            data: result.rows || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.getAll = getAll;
const create = (typename) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.query(`INSERT INTO app.typeclaim
      ( typename)
      VALUES($1)RETURNING *; `, [typename]);
        return {
            success: true,
            data: result.rows[0] || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.create = create;
const update = (id, typename) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.query(`UPDATE app.typeclaim
      SET typename=$2
      WHERE id=$1  RETURNING *; `, [id, typename]);
        return {
            success: true,
            data: result.rows[0] || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.query(`DELETE FROM app.typeclaim
      WHERE id=$1;`, [id]);
        return {
            success: true,
            data: result.rows[0] || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.remove = remove;
