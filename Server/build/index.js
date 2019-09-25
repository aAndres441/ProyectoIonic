"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const employeeRoutes_1 = __importDefault(require("./routes/employeeRoutes"));
const personRoutes_1 = __importDefault(require("./routes/personRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const saleRoutes_1 = __importDefault(require("./routes/saleRoutes"));
const extraExpensesRoutes_1 = __importDefault(require("./routes/extraExpensesRoutes"));
const hoursEmployeeRoutes_1 = __importDefault(require("./routes/hoursEmployeeRoutes"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
const travelerRoutes_1 = __importDefault(require("./routes/travelerRoutes"));
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
        this.app.use('/api/products', productRoutes_1.default);
        this.app.use('/api/employees', employeeRoutes_1.default);
        this.app.use('/api/clients', clientRoutes_1.default);
        this.app.use('/api/travelers', travelerRoutes_1.default);
        this.app.use('/api/persons', personRoutes_1.default);
        this.app.use('/api/orders', orderRoutes_1.default);
        this.app.use('/api/sales', saleRoutes_1.default);
        this.app.use('/api/extraExpenses', extraExpensesRoutes_1.default);
        this.app.use('/api/hoursEmployees', hoursEmployeeRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
