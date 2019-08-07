import {Request,Response} from 'express';
import pool from '../database';

class EmployeeController {
    
    public async list (req:Request,res:Response){
        res.json(await pool.query('SELECT p.* FROM empleado e join persona p on e.id = p.id'));
    }
    
    public async create (req:Request,res:Response): Promise<any>{
        //await pool.query('INSERT INTO empleado set ?',[req.body]);
        await pool.query('insert into persona set ? ',[req.body]);
        //await pool.query('insert into empleado set @@identity'); //values (@@identity)
        res.json({message:'Empleado creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete empleado where id = ?', [id]); 
        res.json({text:'borrar Empleado :'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE empleado set ? where id = ?',[req.body , id]);
        res.json({text:'editando empleado ' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        const prod = await pool.query('SELECT * FROM empleado WHERE id = ?', [id]);
        if(prod.length>0) {
            return res.json(prod[0]);
        }
        res.status(404).json({message:'El empleado no se ah encontrado!'})
    }
}
const employeeController = new EmployeeController();
export default employeeController;

/*
exports.removeById = (userId) => {
    return new Promise((resolve, reject) => {
        User.remove({_id: userId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};
*/