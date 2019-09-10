import { Router } from 'express';
import travelController from '../controllers/travelController';

class TravelRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', travelController.list);
        this.router.get('/:id', travelController.getOne);
        this.router.post('/', travelController.create);
        this.router.delete('/:id', travelController.delete);
        this.router.put('/:id', travelController.update);      
    }

}
const travelRoutes = new TravelRoutes();
export default travelRoutes.router;