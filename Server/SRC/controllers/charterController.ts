import {Request,Response} from 'express';
import pool from '../database';

class CharterController {

    public async list(req: Request, res: Response) {
        res.json(await pool.query('select distinct f.id as id,p.id as travelerId,p.nombre as travelerName,f.fecha as date,f.direccion_origen as sourceAddress,f.direccion_destino as destinationAddress,f.descripcion as description,f.tmstmp as tmstmp from flete f left join persona p on f.fleteroId = p.id'));
    }
  
    public async getId (req:Request,res:Response){
        res.json(await pool.query('select max(id) as id from flete'));
    }
    public async create (req:Request,res:Response): Promise<any>{
        await pool.query('INSERT INTO flete set ?',[req.body]);
        res.json({message:'Flete creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete from flete where id = ?', [id]); 
        res.json({text:'Flete borrado:'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE flete set ? where id = ?',[req.body , id]);
        res.json({text:'Flete editado!' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        if(id=='id'){
            res.json(await pool.query('select max(id) as id from flete'));
        }else if(id=='salesWC'){ //sales without charters
            res.json(await pool.query('select distinct v.id as id,v.clienteId as clientId,p.nombre as clientName,v.descripcion as description,v.montoTotal as totalAmount,v.tmstmp as tmstmp from venta v join cliente c on v.clienteId = c.id JOIN persona p on c.id = p.id where fleteId is null'));
        }else{
            const prod = await pool.query('SELECT * FROM flete WHERE id = ?', [id]);
            if(prod.length>0) {
                return res.json(prod[0]);
            }
            res.status(404).json({message:'El flete no se ah encontrado!'})
        }
        
    }
}
const charterController = new CharterController();
export default charterController;
