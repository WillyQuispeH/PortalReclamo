"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const config_1 = __importDefault(require("./config"));
const cloud = cloudinary_1.v2.config({
    cloud_name: config_1.default.cloudinary_name || "dzfg8xnxn",
    api_key: config_1.default.cloudinary_api_key || "734242724172826",
    api_secret: config_1.default.cloudinary_secret || "1_K4cx2TRHcbd3URjmuHJ_oJU-Y",
});
exports.default = cloud;
