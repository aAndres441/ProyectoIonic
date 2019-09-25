"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const travelerController_1 = __importDefault(require("../controllers/travelerController"));
class TravelersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', travelerController_1.default.list);
        this.router.get('/:id', travelerController_1.default.getOne);
        this.router.post('/', travelerController_1.default.create);
        this.router.delete('/:id', travelerController_1.default.delete);
        this.router.put('/:id', travelerController_1.default.update);
    }
}
const travelerRoutes = new TravelersRoutes();
exports.default = travelerRoutes.router;
