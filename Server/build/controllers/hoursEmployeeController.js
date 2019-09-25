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
class HoursEmployeeController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield database_1.default.query('select h.id as id,empleadoId as employeeId,p.nombre as employeeName,fecha as date,horasTrabajadas as hoursWorked,importe as amount from horas_empleado h,persona p where h.empleadoId = p.id'));
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO horas_empleado set ?', [req.body]);
            res.json({ message: 'Horas empleado creado y guardado!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from horas_empleado where id = ?', [id]);
            res.json({ text: 'Horas empleado borrado:' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE horas_empleado set ? where id = ?', [req.body, id]);
            res.json({ text: 'Horas empleado editado!' + req.params.id });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prod = yield database_1.default.query('SELECT * FROM horas_empleado WHERE id = ?', [id]);
            if (prod.length > 0) {
                return res.json(prod[0]);
            }
            res.status(404).json({ message: 'Horas empleado no se ah encontrado!' });
        });
    }
}
const hoursEmployeeController = new HoursEmployeeController();
exports.default = hoursEmployeeController;
