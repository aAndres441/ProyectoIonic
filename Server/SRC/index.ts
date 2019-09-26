
import morgan from 'morgan';
import cors from 'cors';
import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import productRoutes from './routes/productRoutes';
import employeeRoutes from './routes/employeeRoutes';
import personRoutes from './routes/personRoutes';
import orderRoutes from './routes/orderRoutes';
import saleRoutes from './routes/saleRoutes';
import extraExpensesRoutes from './routes/extraExpensesRoutes';
import hoursEmployeeRoutes from './routes/hoursEmployeeRoutes'
import clientRoutes from './routes/clientRoutes';
import travelerRoutes from './routes/travelerRoutes';
import chartersRoutes from './routes/charterRoutes';
import purchaseRoutes from './routes/purchaseRoutes';

class Server {

    public app : Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/products', productRoutes);
        this.app.use('/api/employees', employeeRoutes);
        this.app.use('/api/clients', clientRoutes);
        this.app.use('/api/travelers', travelerRoutes);
        this.app.use('/api/persons', personRoutes);
        this.app.use('/api/orders', orderRoutes);
        this.app.use('/api/sales', saleRoutes);
        this.app.use('/api/purchases', purchaseRoutes);
        this.app.use('/api/charters', chartersRoutes);
        this.app.use('/api/extraExpenses', extraExpensesRoutes);
        this.app.use('/api/hoursEmployees', hoursEmployeeRoutes);
    }
    start():void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ',this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();