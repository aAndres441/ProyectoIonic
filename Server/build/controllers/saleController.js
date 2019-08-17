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
class SaleController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield database_1.default.query('select v.id as id,v.clienteId as clientId,p.nombre as clientName,v.descripcion as description,v.montoTotal as totalAmount,v.tmstmp as tmstmp from venta v , cliente c JOIN persona p on c.id = p.id'));
        });
    }
    /*  id:data[i].id,
         clientId:data[i].clientId,
         clientName:data[i].clientName,
         description:data[i].description,
         totalAmount:data[i].totalAmount,
         tmstmp:data[i].tmstmp */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO venta set ?', [req.body]);
            res.json({ message: 'Venta creado y guardado!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from venta where id = ?', [id]);
            res.json({ text: 'Venta borrado:' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE venta set ? where id = ?', [req.body, id]);
            res.json({ text: 'Venta editado!' + req.params.id });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prod = yield database_1.default.query('SELECT * FROM venta WHERE id = ?', [id]);
            if (prod.length > 0) {
                return res.json(prod[0]);
            }
            res.status(404).json({ message: 'La venta no se ah encontrado!' });
        });
    }
}
const saleController = new SaleController();
exports.default = saleController;
