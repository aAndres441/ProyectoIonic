"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EmployeeController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield database_1.default.query('SELECT p.* FROM empleado e join persona p on e.id = p.id'));
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //await pool.query('INSERT INTO empleado set ?',[req.body]);
            yield database_1.default.query('insert into persona set ? ', [req.body]);
            //await pool.query('insert into empleado set @@identity'); //values (@@identity)
            res.json({ message: 'Empleado creado y guardado!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete empleado where id = ?', [id]);
            res.json({ text: 'borrar Empleado :' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE empleado set ? where id = ?', [req.body, id]);
            res.json({ text: 'editando empleado ' + req.params.id });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prod = yield database_1.default.query('SELECT * FROM empleado WHERE id = ?', [id]);
            if (prod.length > 0) {
                return res.json(prod[0]);
            }
            res.status(404).json({ message: 'El empleado no se ah encontrado!' });
        });
    }
}
const employeeController = new EmployeeController();
exports.default = employeeController;
/*
exports.removeById = (userId) => {
    return new Promise((resolve, reject) => {
        User.remove({_id: userId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};
*/ 
