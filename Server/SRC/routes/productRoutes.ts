import { Router } from 'express';
import productController from '../controllers/productController';

class ProductRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', productController.list);
        this.router.get('/:id', productController.getOne);
        this.router.post('/', productController.create);
        this.router.delete('/:id', productController.delete);
        this.router.put('/:id', productController.update);
    }

}
const prodRoutes = new ProductRoutes();
export default prodRoutes.router;