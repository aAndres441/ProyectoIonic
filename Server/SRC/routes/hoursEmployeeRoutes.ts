import { Router } from 'express';
import hoursEmployeeController from '../controllers/hoursEmployeeController';

class HoursEmployeeRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', hoursEmployeeController.list);
        this.router.get('/:id', hoursEmployeeController.getOne);
        this.router.post('/', hoursEmployeeController.create);
        this.router.delete('/:id', hoursEmployeeController.delete);
        this.router.put('/:id', hoursEmployeeController.update);
    }

}
const hoursEmployeeRoutes = new HoursEmployeeRoutes();
export default hoursEmployeeRoutes.router;