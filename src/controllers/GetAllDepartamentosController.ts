import { Response,Request } from "express";
import { GetAllDepartamentosServices } from "../services//GetAllDepartamentosServices";

export class GetAllDepartamentosController{
    async handle(request: Request, response: Response){
        const service = new GetAllDepartamentosServices();

        const departamentos = await service.execute();

        return response.json(departamentos);
    }
}
