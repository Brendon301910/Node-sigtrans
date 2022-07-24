import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm"
import{ v4 as uuid } from "uuid"
import { Grupos } from "./Grupos";

@Entity("colaboradores")
export class colaboradores{

    @PrimaryColumn()
    id: string;
    
    @Column()
    nome: string;
    
    @Column()
    email: string;
    
    @Column()
    idade: number;
    
    @Column()
    senha: string;
    
    @Column()
    status: string;

    @ManyToOne(() => Grupos)
    grupos: Grupos;
    
    @Column("redes sociais")
    redes_sociais: string;
    
    @Column("descrição de perfil")
    descriçao_perfil: string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}