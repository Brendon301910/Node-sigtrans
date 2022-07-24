import { getRepository } from "typeorm";
import { colaboradores } from "../entities/Colaboradores";
import { Departamentos } from "../entities/Departamentos";

type DepartamentosRequest = {
    nome: string;
    tipo: string;
    id_id: string;
}

export class DepartamentosServices{
    async execute({nome, tipo,id_id}: DepartamentosRequest): Promise <Error | Departamentos>{
        const repo = getRepository(Departamentos);
        const repoColaboradores = getRepository(colaboradores);

        if(!await repoColaboradores.findOne(id_id)){
            return new Error("Colaborador não existe");
        }

        const Departamentos = repo.create({nome,tipo,id_id});

        await repo.save(Departamentos);

        return Departamentos;
    }
}