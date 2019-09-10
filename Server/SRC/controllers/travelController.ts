import {Request,Response} from 'express';
import pool from '../database';

class TravelController {

    public async list(req: Request, res: Response) {
        res.json(await pool.query('select distinct v.id as id,v.idfletero as travelerId,p.nombre as travelerName,v.precio as price,v.descripcion as description,v.tmstmp as tmstmp from viaje v , fletero f JOIN persona p on f.id = p.id where v.idfletero = f.id'));
    }

    public async getId (req:Request,res:Response){
        res.json(await pool.query('select max(id) as id from viaje'));
    }
    public async create (req:Request,res:Response): Promise<any>{
        await pool.query('INSERT INTO viaje set ?',[req.body]);
        res.json({message:'Viaje creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete from viaje where id = ?', [id]); 
        res.json({text:'Viaje borrado:'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE viaje set ? where id = ?',[req.body , id]);
        res.json({text:'Viaje editado!' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        if(id=='id'){
            res.json(await pool.query('select max(id) as id from viaje'));
        }else{
            const prod = await pool.query('SELECT * FROM viaje WHERE id = ?', [id]);
            if(prod.length>0) {
                return res.json(prod[0]);
            }
            res.status(404).json({message:'El viaje no se ah encontrado!'})
        }
        
    }
}
const travelController = new TravelController();
export default travelController;
