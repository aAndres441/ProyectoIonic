"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = __importDefault(require("../controllers/employeeController"));
class EmployeesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', employeeController_1.default.list);
        this.router.get('/:id', employeeController_1.default.getOne);
        this.router.post('/', employeeController_1.default.create);
        this.router.delete('/:id', employeeController_1.default.delete);
        this.router.put('/:id', employeeController_1.default.update);
    }
}
const empRoutes = new EmployeesRoutes();
exports.default = empRoutes.router;
