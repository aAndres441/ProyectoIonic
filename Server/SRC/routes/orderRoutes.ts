import { Router } from 'express';
import orderController from '../controllers/orderController';

class OrderRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', orderController.list);
        this.router.get('/:id', orderController.getOne);
        this.router.post('/', orderController.create);
        this.router.delete('/:id', orderController.delete);
        this.router.put('/:id', orderController.update);
    }

}
const orderRoutes = new OrderRoutes();
export default orderRoutes.router;