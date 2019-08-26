import {Request,Response} from 'express';

class IndexController {
    public index (req:Request,res:Response){
        res.json({text:' la API Is /api/**'});
    }
    
}

export const indexController = new IndexController();