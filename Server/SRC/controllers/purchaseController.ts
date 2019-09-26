import {Request,Response} from 'express';
import pool from '../database';

class PurchaseController {

    public async list(req: Request, res: Response) {
        res.json(await pool.query('select distinct v.id as id,v.clienteId as clientId,p.nombre as clientName,v.descripcion as description,v.montoTotal as totalAmount,v.tmstmp as tmstmp from compra v join cliente c on v.clienteId = c.id JOIN persona p on c.id = p.id'));
    }
   /*  id:data[i].id,
        clientId:data[i].clientId,
        clientName:data[i].clientName,
        description:data[i].description,
        totalAmount:data[i].totalAmount,
        tmstmp:data[i].tmstmp */
    public async create (req:Request,res:Response): Promise<any>{
        await pool.query('INSERT INTO compra set ?',[req.body]);
        res.json({message:'Compra creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete from compra where id = ?', [id]); 
        res.json({text:'Compra borrado:'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE compra set ? where id = ?',[req.body , id]);
        res.json({text:'Compra editado!' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        if(id=='id'){
            res.json(await pool.query('select max(id) as id from compra'));
        }else{
            const prod = await pool.query('SELECT * FROM compra WHERE id = ?', [id]);
            if(prod.length>0) {
                return res.json(prod[0]);
            }
            res.status(404).json({message:'La compra no se ah encontrado!'})
        }
        
    }
}
const purchaseController = new PurchaseController();
export default purchaseController;
