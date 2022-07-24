import { Request, Response } from "express";
import { getAllColaboradoresServices } from "../services/GetAllColaboredoresServices";



export class getAllColaboradoresController{
    async handle(request: Request, response: Response){
        const service = new getAllColaboradoresServices();
        
        const colaboradores = await service.execute();

        return response.json(colaboradores);
    }
}