import { Request, Response } from "express";
import { ColaboradoresServices } from "../services/ColaboradoresServices"


export class ColaboradoresController{
    async handle(request: Request, response: Response){
        const{ nome, id } = request.body

        const service = new ColaboradoresServices;

        const result = await service.execute({nome, id});   

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.json(result);

    }
}