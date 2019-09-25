import {Request,Response} from 'express';
import pool from '../database';

class ExtraExpensesController {
    
    public async list (req:Request,res:Response){
        res.json(await pool.query('select g.id as id,g.descripcion as description,g.monto as price ,g.tmstmp as tmstmp  from gastosExtras g'));
    }

    public async create (req:Request,res:Response): Promise<any>{
        await pool.query('INSERT INTO gastosExtras set ?',[req.body]);
        res.json({message:'ExtraExpenseso creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete from gastosExtras where id = ?', [id]); 
        res.json({text:'ExtraExpenseso borrado:'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE gastosExtras set ? where id = ?',[req.body , id]);
        res.json({text:'ExtraExpenseso editado!' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        const prod = await pool.query('SELECT * FROM gastosExtras WHERE id = ?', [id]);
        if(prod.length>0) {
            return res.json(prod[0]);
        }
        res.status(404).json({message:'Gasto extra no se ah encontrado!'})
    }
}
const extraExpenseController = new ExtraExpensesController();
export default extraExpenseController;
