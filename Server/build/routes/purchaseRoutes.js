"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const purchaseController_1 = __importDefault(require("../controllers/purchaseController"));
class PurchaseRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', purchaseController_1.default.list);
        this.router.get('/:id', purchaseController_1.default.getOne);
        this.router.post('/', purchaseController_1.default.create);
        this.router.delete('/:id', purchaseController_1.default.delete);
        this.router.put('/:id', purchaseController_1.default.update);
    }
}
const purchaseRoutes = new PurchaseRoutes();
exports.default = purchaseRoutes.router;
