"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const employeeRoutes_1 = __importDefault(require("./routes/employeeRoutes"));
const personRoutes_1 = __importDefault(require("./routes/personRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/products', productosRoutes_1.default);
        this.app.use('/api/employees', employeeRoutes_1.default);
        this.app.use('/api/persons', personRoutes_1.default);
        this.app.use('/api/orders', orderRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
