import {Request,Response} from 'express';
import pool from '../database';

class SaleController {

    public async list(req: Request, res: Response) {
        res.json(await pool.query('select distinct v.id as id,v.clienteId as clientId,p.nombre as clientName,v.descripcion as description,v.montoTotal as totalAmount,v.tmstmp as tmstmp from venta v join cliente c on v.clienteId = c.id JOIN persona p on c.id = p.id'));
    }
   /*  id:data[i].id,
        clientId:data[i].clientId,
        clientName:data[i].clientName,
        description:data[i].description,
        totalAmount:data[i].totalAmount,
        tmstmp:data[i].tmstmp */
    public async create (req:Request,res:Response): Promise<any>{
        await pool.query('INSERT INTO venta set ?',[req.body]);
        res.json({message:'Venta creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete from venta where id = ?', [id]); 
        res.json({text:'Venta borrado:'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE venta set ? where id = ?',[req.body , id]);
        res.json({text:'Venta editado!' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        if(id=='id'){
            res.json(await pool.query('select max(id) as id from venta'));
        }else{
            const prod = await pool.query('SELECT * FROM venta WHERE id = ?', [id]);
            if(prod.length>0) {
                return res.json(prod[0]);
            }
            res.status(404).json({message:'La venta no se ah encontrado!'})
        }
        
    }
}
const saleController = new SaleController();
export default saleController;
