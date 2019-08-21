"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const saleController_1 = __importDefault(require("../controllers/saleController"));
class SaleRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', saleController_1.default.list);
        this.router.get('/:id', saleController_1.default.getOne);
        this.router.post('/', saleController_1.default.create);
        this.router.delete('/:id', saleController_1.default.delete);
        this.router.put('/:id', saleController_1.default.update);
        this.router.get('/-', saleController_1.default.getId);
    }
}
const saleRoutes = new SaleRoutes();
exports.default = saleRoutes.router;
