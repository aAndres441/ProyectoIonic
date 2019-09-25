"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const travelController_1 = __importDefault(require("../controllers/travelController"));
class TravelRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', travelController_1.default.list);
        this.router.get('/:id', travelController_1.default.getOne);
        this.router.post('/', travelController_1.default.create);
        this.router.delete('/:id', travelController_1.default.delete);
        this.router.put('/:id', travelController_1.default.update);
    }
}
const travelRoutes = new TravelRoutes();
exports.default = travelRoutes.router;
