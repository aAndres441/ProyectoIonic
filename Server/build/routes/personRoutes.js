"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personController_1 = __importDefault(require("../controllers/personController"));
class PersonRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', personController_1.default.list);
        this.router.get('/:id', personController_1.default.getOne);
        this.router.post('/', personController_1.default.create);
        this.router.delete('/:id', personController_1.default.delete);
        this.router.put('/:id', personController_1.default.update);
    }
}
const empRoutes = new PersonRoutes();
exports.default = empRoutes.router;
