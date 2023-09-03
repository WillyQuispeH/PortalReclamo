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
exports.remove = exports.validate = exports.getById = exports.create = void 0;
const database_1 = __importDefault(require("../utils/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const create = (person_id, password, photo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const saltRounds = 10;
        const salt = yield bcrypt_1.default.genSalt(saltRounds);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const resultDatabase = yield database_1.default.query(`INSERT INTO app."user"
        (hash, person_id, photo)
        VALUES( $1, $2 , $3)RETURNING *; `, [hash, person_id, photo]);
        return {
            success: true,
            data: resultDatabase || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.create = create;
const validate = (person_id, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDatabase = yield database_1.default.query(`SELECT hash, photo FROM app."user" WHERE person_id = $1;`, [person_id]);
        if (resultDatabase.rowCount === 0) {
            return {
                success: true,
                data: { isMatch: false },
                error: null,
            };
        }
        const { hash, photo } = resultDatabase.rows[0];
        const isMatch = yield bcrypt_1.default.compare(password, hash);
        return {
            success: true,
            data: { isMatch, photo },
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.validate = validate;
const getById = (person_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDatabase = yield database_1.default.query(`SELECT id, hash, person_id
        FROM app."user" WHERE person_id = $1; `, [person_id]);
        return {
            success: true,
            data: resultDatabase.rows[0] || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.getById = getById;
const remove = (person_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultDatabase = yield database_1.default.query(`DELETE FROM app."user"
       WHERE  person_id = $1; `, [person_id]);
        return {
            success: true,
            data: resultDatabase.rows || null,
            error: null,
        };
    }
    catch (e) {
        return { success: false, data: null, error: e.message };
    }
});
exports.remove = remove;
