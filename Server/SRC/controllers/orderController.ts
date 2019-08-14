import {Request,Response} from 'express';
import pool from '../database';

class OrderController {
    
    public async list (req:Request,res:Response){
        res.json(await pool.query('SELECT * FROM item'));
    }
    
    public async create (req:Request,res:Response): Promise<any>{
        await pool.query('INSERT INTO item set ?',[req.body]);
        res.json({message:'Pedido creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete from item where id = ?', [id]); 
        res.json({text:'Pedido borrado:'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE item set ? where id = ?',[req.body , id]);
        res.json({text:'Pedido editado:' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        const prod = await pool.query('SELECT * FROM item WHERE id = ?', [id]);
        if(prod.length>0) {
            return res.json(prod[0]);
        }
        res.status(404).json({message:'El pedido no se ah encontrado!'})
    }
}
const orderController = new OrderController();
export default orderController;
