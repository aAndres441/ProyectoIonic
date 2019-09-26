import { Router } from 'express';
import purchaseController from '../controllers/purchaseController';

class PurchaseRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', purchaseController.list);
        this.router.get('/:id', purchaseController.getOne);
        this.router.post('/', purchaseController.create);
        this.router.delete('/:id', purchaseController.delete);
        this.router.put('/:id', purchaseController.update);      
    }

}
const purchaseRoutes = new PurchaseRoutes();
export default purchaseRoutes.router;