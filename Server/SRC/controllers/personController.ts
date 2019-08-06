import {Request,Response} from 'express';
import pool from '../database';

class PersonController {
    
    public async list (req:Request,res:Response){
        const person = await pool.query('SELECT * FROM person');
        res.json({person});
    }
    
    public async create (req:Request,res:Response): Promise<any>{
        await pool.query('INSERT INTO person set ?',[req.body]);
        res.json({message:'Person creado y guardado!'})
    }

    public async delete (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        await pool.query('delete person where id = ?', [id]); 
        res.json({text:'borrando person :'+ req.params.id});
    }

    public async update (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('UPDATE person set ? where id = ?',[req.body , id]);
        res.json({text:'editando prod' + req.params.id})
    }

    public async getOne (req:Request,res:Response):Promise<any>{
        const {id} = req.params;
        const prod = await pool.query('SELECT * FROM person WHERE id = ?', [id]);
        if(prod.length>0) {
            return res.json(prod[0]);
        }
        res.status(404).json({message:'La persona no se ah encontrado!'})
    }
}
const personController = new PersonController();
export default personController;

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