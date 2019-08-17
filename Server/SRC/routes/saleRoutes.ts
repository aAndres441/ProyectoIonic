import { Router } from 'express';
import saleController from '../controllers/saleController';

class SaleRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', saleController.list);
        this.router.get('/:id', saleController.getOne);
        this.router.post('/', saleController.create);
        this.router.delete('/:id', saleController.delete);
        this.router.put('/:id', saleController.update);
    }

}
const saleRoutes = new SaleRoutes();
export default saleRoutes.router;