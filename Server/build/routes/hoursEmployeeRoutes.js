"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hoursEmployeeController_1 = __importDefault(require("../controllers/hoursEmployeeController"));
class HoursEmployeeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', hoursEmployeeController_1.default.list);
        this.router.get('/:id', hoursEmployeeController_1.default.getOne);
        this.router.post('/', hoursEmployeeController_1.default.create);
        this.router.delete('/:id', hoursEmployeeController_1.default.delete);
        this.router.put('/:id', hoursEmployeeController_1.default.update);
    }
}
const hoursEmployeeRoutes = new HoursEmployeeRoutes();
exports.default = hoursEmployeeRoutes.router;
