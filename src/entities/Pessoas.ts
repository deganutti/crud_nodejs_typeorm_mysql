import { Entity, Column, CreateDateColumn,UpdateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"; 
//import { PessoasEndereco } from "./PessoasEndereco";

@Entity("pessoas")
export class Pessoas{
    @PrimaryColumn()
    id_pessoa:string;

    @Column()
    razao:string;

    @Column()
    fantasia:string;

    @Column()
    ie:string;

    @Column()
    cnpj:string;

    @Column()
    tipo:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

  
    constructor(){
        if(!this.id_pessoa){
            this.id_pessoa = uuid();
        }
    }
}