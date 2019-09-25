import {Request,Response} from 'express';
import pool from '../database';

class TravelerController {
    
    public async list (req:Request,res:Response){
        res.json(await pool.query('select p.id as id,p.nombre as name,p.apellido as lastname,p.email as email,p.direccion as direction,p.telefono as cellphone,p.tmstmp as tmstmp from persona p join fletero c on p.id = c.id'));
    }
    
    public async create (req:Request,res:Response): Promise<any>{
        //await pool.query('INSERT INTO fletero set ?',[req.body]);
        await pool.query('insert into fletero set ? ',[req.body]);
        //await pool.query('insert into fletero set @@identity'); //values (@@identity)
        res.json({message:'Travelere creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete fletero where id = ?', [id]); 
        res.json({text:'borrar fletero :'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE fletero set ? where id = ?',[req.body , id]);
        res.json({text:'editando fletero ' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        const prod = await pool.query('SELECT * FROM fletero WHERE id = ?', [id]);
        if(prod.length>0) {
            return res.json(prod[0]);
        }
        res.status(404).json({message:'El fletero no se ah encontrado!'})
    }
}
const travelerController = new TravelerController();
export default travelerController;
