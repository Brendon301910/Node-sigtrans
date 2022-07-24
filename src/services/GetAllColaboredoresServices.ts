import { getRepository } from "typeorm";
import { colaboradores } from "../entities/Colaboradores";



export class getAllColaboradoresServices{
    async execute(){
        const repo = getRepository(colaboradores);

        const Colaboradores = await repo.find;

        return Colaboradores;
    }
}