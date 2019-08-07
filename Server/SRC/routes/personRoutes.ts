import { Router } from 'express';
import PersonController from '../controllers/personController';

class PersonRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', PersonController.list);
        this.router.get('/:id', PersonController.getOne);
        this.router.post('/', PersonController.create);
        this.router.delete('/:id', PersonController.delete);
        this.router.put('/:id', PersonController.update);
    }

}
const empRoutes = new PersonRoutes();
export default empRoutes.router;