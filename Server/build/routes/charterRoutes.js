"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const charterController_1 = __importDefault(require("../controllers/charterController"));
class CharterRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', charterController_1.default.list);
        this.router.get('/:id', charterController_1.default.getOne);
        this.router.post('/', charterController_1.default.create);
        this.router.delete('/:id', charterController_1.default.delete);
        this.router.put('/:id', charterController_1.default.update);
    }
}
const charterRoutes = new CharterRoutes();
exports.default = charterRoutes.router;
