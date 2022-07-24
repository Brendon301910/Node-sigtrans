import { Entity, Column, CreateDateColumn, PrimaryColumn, OneToMany, ManyToOne, JoinColumn} from "typeorm"
import{ v4 as uuid } from "uuid"
import { colaboradores } from "./Colaboradores";

@Entity("Grupos")
export class Grupos{

    @PrimaryColumn()
    id: string;
    
    @Column()
    nome: string;

    @Column()
    id_id: string;

    @ManyToOne(() => colaboradores)
    @JoinColumn({name: "id_id"})
    colaboradores: colaboradores;

    @Column()
    tipo: string;


    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}