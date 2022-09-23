import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn,Unique } from "typeorm";
import { v4 as uuid } from "uuid";
//import { PessoasEndereco } from "./PessoasEndereco";

@Entity("pessoas")
export class Pessoas {
    @PrimaryColumn()
    id_pessoa: string;

    @Column()
    nome: string;

    @Column()
    apelido: string;

    @Column()
    nacimento: Date;

    @PrimaryColumn()
    email: string;

   // @Unique(email)

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id_pessoa) {
            this.id_pessoa = uuid();
        }
    }
}