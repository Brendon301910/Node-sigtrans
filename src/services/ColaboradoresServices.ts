import { getRepository } from "typeorm";
import { colaboradores } from "../entities/Colaboradores";

type ColaboradoresResquest = {
    id: string;
    nome: string;
};

export class ColaboradoresServices{

    async execute({id, nome}: ColaboradoresResquest) : Promise<colaboradores | Error>{
        const repo = getRepository(Colaboradores);

        if(await repo.findOne({nome})) {
            return new Error("Colaborador já existe");
            
        }

        const Colaboradores = repo.create({
            id,
            nome,

        });
        await repo.save(Colaboradores);

        return Colaboradores;
    }
}