"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const auth = (req, res, next) => {
    if (req.headers.id !== "957902342") {
        res.status(401).json({ message: "Acceso no autorizado" });
        return;
    }
    return next();
};
exports.auth = auth;
