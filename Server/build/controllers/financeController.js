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
class FinanceController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (id == 'getFinances') {
                console.log('ACAA!!!');
                console.log(req.body);
                let per = "'2019-09-01'";
                const prod = yield database_1.default.query('CALL barracaDB.getFinances(' + per + ',@total);select @total;');
                if (prod.length > 0) {
                    return res.json(prod);
                }
            }
            else {
                const prod = yield database_1.default.query('SELECT * FROM empleado WHERE id = ?', [id]);
                if (prod.length > 0) {
                    return res.json(prod[0]);
                }
                res.status(404).json({ message: 'El empleado no se ah encontrado!' });
            }
        });
    }
}
const financeController = new FinanceController();
exports.default = financeController;
