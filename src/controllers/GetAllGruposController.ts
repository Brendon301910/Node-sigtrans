import { Response,Request } from "express";
import { GetAllGruposServices } from "../services/GetAllGruposServices";

export class GetAllGrupoController{
    async handle(request: Request, response: Response){
        const service = new GetAllGruposServices();

        const grupos = await service.execute();

        return response.json(grupos);
    }
}

