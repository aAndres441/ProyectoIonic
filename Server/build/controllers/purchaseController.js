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
class PurchaseController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield database_1.default.query('select distinct v.id as id,v.clienteId as clientId,p.nombre as clientName,v.descripcion as description,v.montoTotal as totalAmount,v.tmstmp as tmstmp from compra v join cliente c on v.clienteId = c.id JOIN persona p on c.id = p.id'));
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
            yield database_1.default.query('INSERT INTO compra set ?', [req.body]);
            res.json({ message: 'Compra creado y guardado!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from compra where id = ?', [id]);
            res.json({ text: 'Compra borrado:' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE compra set ? where id = ?', [req.body, id]);
            res.json({ text: 'Compra editado!' + req.params.id });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (id == 'id') {
                res.json(yield database_1.default.query('select max(id) as id from compra'));
            }
            else {
                const prod = yield database_1.default.query('SELECT * FROM compra WHERE id = ?', [id]);
                if (prod.length > 0) {
                    return res.json(prod[0]);
                }
                res.status(404).json({ message: 'La compra no se ah encontrado!' });
            }
        });
    }
}
const purchaseController = new PurchaseController();
exports.default = purchaseController;
