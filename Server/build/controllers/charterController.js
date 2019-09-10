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
class CharterController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield database_1.default.query('select distinct f.id as id,f.viajeId as travelId,f.direccion_origen as sourceAddress,f.direccion_destino as destinationAddress,f.descripcion as description,f.tmstmp as tmstmp from flete f'));
        });
    }
    getId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield database_1.default.query('select max(id) as id from flete'));
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO flete set ?', [req.body]);
            res.json({ message: 'Flete creado y guardado!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from flete where id = ?', [id]);
            res.json({ text: 'Flete borrado:' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE flete set ? where id = ?', [req.body, id]);
            res.json({ text: 'Flete editado!' + req.params.id });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (id == 'id') {
                res.json(yield database_1.default.query('select max(id) as id from flete'));
            }
            else {
                const prod = yield database_1.default.query('SELECT * FROM flete WHERE id = ?', [id]);
                if (prod.length > 0) {
                    return res.json(prod[0]);
                }
                res.status(404).json({ message: 'El flete no se ah encontrado!' });
            }
        });
    }
}
const charterController = new CharterController();
exports.default = charterController;
