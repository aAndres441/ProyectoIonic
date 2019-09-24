"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const extraExpensesController_1 = __importDefault(require("../controllers/extraExpensesController"));
class ExtraExpensesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', extraExpensesController_1.default.list);
        this.router.get('/:id', extraExpensesController_1.default.getOne);
        this.router.post('/', extraExpensesController_1.default.create);
        this.router.delete('/:id', extraExpensesController_1.default.delete);
        this.router.put('/:id', extraExpensesController_1.default.update);
    }
}
const extExpRoutes = new ExtraExpensesRoutes();
exports.default = extExpRoutes.router;
