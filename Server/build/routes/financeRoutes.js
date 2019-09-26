"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const financeController_1 = __importDefault(require("../controllers/financeController"));
class FinanceRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', financeController_1.default.getOne);
    }
}
const empRoutes = new FinanceRoutes();
exports.default = empRoutes.router;
