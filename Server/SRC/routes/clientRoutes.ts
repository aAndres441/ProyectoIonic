import { Router } from 'express';
import ClientController from '../controllers/clientController';

class ClientsRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', ClientController.list);
        this.router.get('/:id', ClientController.getOne);
        this.router.post('/', ClientController.create);
        this.router.delete('/:id', ClientController.delete);
        this.router.put('/:id', ClientController.update);
    }

}
const clientRoutes = new ClientsRoutes();
export default clientRoutes.router;