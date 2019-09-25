"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = __importDefault(require("../controllers/clientController"));
class ClientsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clientController_1.default.list);
        this.router.get('/:id', clientController_1.default.getOne);
        this.router.post('/', clientController_1.default.create);
        this.router.delete('/:id', clientController_1.default.delete);
        this.router.put('/:id', clientController_1.default.update);
    }
}
const clientRoutes = new ClientsRoutes();
exports.default = clientRoutes.router;
