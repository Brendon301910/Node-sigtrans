import { Request, Response } from "express";
import {DeleteColaboradoresService} from '../services/DeleteColaboradoresService';

export class DeleteColaboradoresController{
    async handle(request: Request, response: Response){
        const {id} = request.params;

        const service = new DeleteColaboradoresService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}