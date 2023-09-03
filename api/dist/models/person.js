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
exports.getById = exports.getByEmail = exports.getByRut = exports.create = void 0;
const database_1 = __importDefault(require("../utils/database"));
const create = (rut, name, paternallastname, maternallastname, email, phone) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.query(`INSERT INTO app.persona (rut, "name", paternallastname, maternallastname, email, phone)
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (rut) DO UPDATE
      SET "name" = EXCLUDED."name",
          paternallastname = EXCLUDED.paternallastname,
          maternallastname = EXCLUDED.maternallastname,
          email = EXCLUDED.email,
          phone = EXCLUDED.phone RETURNING *;`, [rut, name, paternallastname, maternallastname, email, phone]);
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
const getByRut = (rut) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.query(`SELECT id, rut, "name", paternallastname, maternallastname, email, phone
      FROM app.persona WHERE rut = $1;
      `, [rut]);
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
exports.getByRut = getByRut;
const getByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.query(`SELECT id, rut, "name", paternallastname, maternallastname, email, phone
      FROM app.persona WHERE email = $1; `, [email]);
        return {
            success: true,
            data: result.rows[0],
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.getByEmail = getByEmail;
const getById = (person_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.query(`SELECT id, rut, "name", paternallastname, maternallastname, email, phone
      FROM app.persona WHERE id = $1; `, [person_id]);
        return {
            success: true,
            data: result.rows[0],
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.getById = getById;
