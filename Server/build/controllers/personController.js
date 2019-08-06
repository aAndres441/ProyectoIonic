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
class PersonController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const person = yield database_1.default.query('SELECT * FROM person');
            res.json({ person });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO person set ?', [req.body]);
            res.json({ message: 'Person creado y guardado!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('delete person where id = ?', [id]);
            res.json({ text: 'borrando person :' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE person set ? where id = ?', [req.body, id]);
            res.json({ text: 'editando prod' + req.params.id });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prod = yield database_1.default.query('SELECT * FROM person WHERE id = ?', [id]);
            if (prod.length > 0) {
                return res.json(prod[0]);
            }
            res.status(404).json({ message: 'La persona no se ah encontrado!' });
        });
    }
}
const personController = new PersonController();
exports.default = personController;
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
