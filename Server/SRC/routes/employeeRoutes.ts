import { Router } from 'express';
import EmployeeController from '../controllers/employeeController';

class EmployeesRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', EmployeeController.list);
        this.router.get('/:id', EmployeeController.getOne);
        this.router.post('/', EmployeeController.create);
        this.router.delete('/:id', EmployeeController.delete);
        this.router.put('/:id', EmployeeController.update);
    }

}
const empRoutes = new EmployeesRoutes();
export default empRoutes.router;