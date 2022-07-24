import { getRepository } from "typeorm";
import { Departamentos } from "../entities/Departamentos";




export class GetAllDepartamentosServices{
    async execute(){
        const repo = getRepository(Departamentos);

        const departamentos = await repo.find();

        return departamentos;
    }
    }
