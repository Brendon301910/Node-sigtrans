import { getRepository } from "typeorm";
import { colaboradores } from "../entities/Colaboradores";



export class DeleteColaboradoresService{
   async execute(id: string){
    const repo = getRepository(colaboradores);

    if(!(await repo.findOne(id))){
        return new Error("Colaborador não existe")
    }

    await repo.delete(id);
   }
}