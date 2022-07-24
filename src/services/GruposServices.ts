import { getRepository } from "typeorm";
import { colaboradores } from "../entities/Colaboradores";
import { Grupos } from "../entities/Grupos";

type GruposRequest = {
    nome: string;
    tipo: string;
    id_id: string;
}

export class GruposServices{
    async execute({nome, tipo,id_id}: GruposRequest): Promise <Error | Grupos>{
        const repo = getRepository(Grupos);
        const repoColaboradores = getRepository(colaboradores);

        if(!await repoColaboradores.findOne(id_id)){
            return new Error("Colaborador não existe");
        }

        const Grupos = repo.create({nome,tipo,id_id});

        await repo.save(Grupos);

        return Grupos;
    }
}