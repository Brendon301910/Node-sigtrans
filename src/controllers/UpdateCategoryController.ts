import { Request, Response } from "express";
import { UpdateColaboradoresServices } from "../services/UpdateColaboradoresServices";


export class UpdateColaboradoresController{
    async handle(request: Request, response: Response){
        const {id} = request.params;
        const{nome} = request.body;

        const service = new UpdateColaboradoresServices();

        const result = await service.execute({id, nome});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}