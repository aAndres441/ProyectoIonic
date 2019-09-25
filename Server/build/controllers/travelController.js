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
class TravelController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield database_1.default.query('select distinct v.id as id,v.idfletero as travelerId,p.nombre as travelerName,v.precio as price,v.direccion_origen as sourceAddress,v.direccion_destino as destinationAddress,v.descripcion as description,v.tmstmp as tmstmp from viaje v , fletero f JOIN persona p on f.id = p.id where v.idfletero = f.id'));
        });
    }
    getId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield database_1.default.query('select max(id) as id from viaje'));
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO viaje set ?', [req.body]);
            res.json({ message: 'Viaje creado y guardado!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete from viaje where id = ?', [id]);
            res.json({ text: 'Viaje borrado:' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE viaje set ? where id = ?', [req.body, id]);
            res.json({ text: 'Viaje editado!' + req.params.id });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (id == 'id') {
                res.json(yield database_1.default.query('select max(id) as id from viaje'));
            }
            else {
                const prod = yield database_1.default.query('SELECT * FROM viaje WHERE id = ?', [id]);
                if (prod.length > 0) {
                    return res.json(prod[0]);
                }
                res.status(404).json({ message: 'El viaje no se ah encontrado!' });
            }
        });
    }
}
const travelController = new TravelController();
exports.default = travelController;
