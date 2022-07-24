import { getRepository } from "typeorm";
import { colaboradores } from "../entities/Colaboradores";

type ColaboradoresUpdateResquest = {
    id: string;
    nome: string;
};

export class UpdateColaboradoresServices{
    async execute({id,nome}: ColaboradoresUpdateResquest){
        const repo = getRepository(Colaboradores)

        const Colaboradores = await repo.findOne(id);

        if(!colaboradores){
            return new Error("Colaborador não existe")
        }

        Colaboradores.nome = nome ? nome: Colaboradores.nome;
        Colaboradores.id = id ? id: Colaboradores.id;

        await repo.save(colaboradores);
    }
}