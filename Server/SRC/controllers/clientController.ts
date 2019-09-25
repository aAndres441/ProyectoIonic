import {Request,Response} from 'express';
import pool from '../database';

class ClientController {
    
    public async list (req:Request,res:Response){
        res.json(await pool.query('select p.id as id,p.nombre as name,p.apellido as lastname,p.email as email,p.direccion as direction,p.telefono as cellphone,p.tmstmp as tmstmp from persona p join cliente c on p.id = c.id'));
    }
    
    public async create (req:Request,res:Response): Promise<any>{
        //await pool.query('INSERT INTO cliente set ?',[req.body]);
        await pool.query('insert into cliente set ? ',[req.body]);
        //await pool.query('insert into cliente set @@identity'); //values (@@identity)
        res.json({message:'Cliente creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete cliente where id = ?', [id]); 
        res.json({text:'borrar Cliente :'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE cliente set ? where id = ?',[req.body , id]);
        res.json({text:'editando cliente ' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        const prod = await pool.query('SELECT * FROM cliente WHERE id = ?', [id]);
        if(prod.length>0) {
            return res.json(prod[0]);
        }
        res.status(404).json({message:'El cliente no se ah encontrado!'})
    }
}
const clientController = new ClientController();
export default clientController;
