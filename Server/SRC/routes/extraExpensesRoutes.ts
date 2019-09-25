import { Router } from 'express';
import extraExpensesController from '../controllers/extraExpensesController';

class ExtraExpensesRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', extraExpensesController.list);
        this.router.get('/:id', extraExpensesController.getOne);
        this.router.post('/', extraExpensesController.create);
        this.router.delete('/:id', extraExpensesController.delete);
        this.router.put('/:id', extraExpensesController.update);
    }

}
const extExpRoutes = new ExtraExpensesRoutes();
export default extExpRoutes.router;