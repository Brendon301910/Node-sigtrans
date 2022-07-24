import { getRepository } from "typeorm";
import {Grupos} from "../entities/Grupos" ;



export class GetAllGruposServices{
    async execute(){
        const repo = getRepository(Grupos);

        const grupos = await repo.find();

        return grupos;
    }
    }
