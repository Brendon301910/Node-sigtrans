import { Request, Response } from "express";
import { GruposServices } from "../services/GruposServices";

export class GruposController{
    async handle(request: Request, response: Response){
       const{nome, tipo, id_id}  = request.body

       const service = new GruposServices();

       const result = await service.execute({
        nome,
        tipo,
        id_id
       });

       if(result instanceof Error){
        return response.status(400).json(result.message);
       }

       return response.json(result);
    }
}