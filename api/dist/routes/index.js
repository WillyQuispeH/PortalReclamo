"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = exports.ClaimDetailRouter = exports.FileRouter = exports.TypeClaimRouter = exports.PersonRouter = exports.ClaimRouter = void 0;
const claim_1 = __importDefault(require("./claim"));
exports.ClaimRouter = claim_1.default;
const person_1 = __importDefault(require("./person"));
exports.PersonRouter = person_1.default;
const typeClaim_1 = __importDefault(require("./typeClaim"));
exports.TypeClaimRouter = typeClaim_1.default;
const file_1 = __importDefault(require("./file"));
exports.FileRouter = file_1.default;
const claimDetail_1 = __importDefault(require("./claimDetail"));
exports.ClaimDetailRouter = claimDetail_1.default;
const user_1 = __importDefault(require("./user"));
exports.UserRouter = user_1.default;
