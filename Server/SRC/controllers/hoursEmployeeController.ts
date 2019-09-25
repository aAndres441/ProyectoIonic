import {Request,Response} from 'express';
import pool from '../database';

class HoursEmployeeController {
    
    public async list (req:Request,res:Response){
        res.json(await pool.query('select h.id as id,empleadoId as employeeId,p.nombre as employeeName,fecha as date,horasTrabajadas as hoursWorked,importe as amount from horas_empleado h,persona p where h.empleadoId = p.id'));
    }

    public async create (req:Request,res:Response): Promise<any>{
        await pool.query('INSERT INTO horas_empleado set ?',[req.body]);
        res.json({message:'Horas empleado creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete from horas_empleado where id = ?', [id]); 
        res.json({text:'Horas empleado borrado:'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE horas_empleado set ? where id = ?',[req.body , id]);
        res.json({text:'Horas empleado editado!' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        const prod = await pool.query('SELECT * FROM horas_empleado WHERE id = ?', [id]);
        if(prod.length>0) {
            return res.json(prod[0]);
        }
        res.status(404).json({message:'Horas empleado no se ah encontrado!'})
    }
}
const hoursEmployeeController = new HoursEmployeeController();
export default hoursEmployeeController;
