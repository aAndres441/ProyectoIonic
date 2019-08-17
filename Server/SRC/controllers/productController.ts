import {Request,Response} from 'express';
import pool from '../database';

class ProductController {
    
    public async list (req:Request,res:Response){
        res.json(await pool.query('SELECT * FROM producto'));
    }
    
    public async create (req:Request,res:Response): Promise<any>{
        await pool.query('INSERT INTO producto set ?',[req.body]);
        res.json({message:'Producto creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete from producto where id = ?', [id]); 
        res.json({text:'Producto borrado:'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE producto set ? where id = ?',[req.body , id]);
        res.json({text:'Producto editado!' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        const prod = await pool.query('SELECT * FROM producto WHERE id = ?', [id]);
        if(prod.length>0) {
            return res.json(prod[0]);
        }
        res.status(404).json({message:'Producto no se ah encontrado!'})
    }
}
const productController = new ProductController();
export default productController;
