import { Router } from 'express';
import charterController from '../controllers/charterController';

class CharterRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', charterController.list);
        this.router.get('/:id', charterController.getOne);
        this.router.post('/', charterController.create);
        this.router.delete('/:id', charterController.delete);
        this.router.put('/:id', charterController.update);      
    }

}
const charterRoutes = new CharterRoutes();
export default charterRoutes.router;