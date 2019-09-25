import { Router } from 'express';
import TravelerController from '../controllers/travelerController';

class TravelersRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', TravelerController.list);
        this.router.get('/:id', TravelerController.getOne);
        this.router.post('/', TravelerController.create);
        this.router.delete('/:id', TravelerController.delete);
        this.router.put('/:id', TravelerController.update);
    }

}
const travelerRoutes = new TravelersRoutes();
export default travelerRoutes.router;