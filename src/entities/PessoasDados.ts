import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, Unique } from "typeorm";
import { v4 as uuid } from "uuid";
import { Pessoas } from "./Pessoas";
//import { PessoasEndereco } from "./PessoasEndereco";

@Entity("pessoasdados")
export class PessoasDados {
    @PrimaryColumn()
    id_dados: string;

    @PrimaryColumn()
    @ManyToOne(() => Pessoas)
    @JoinColumn({ name: "id_pessoa" })
    id_pessoa: Pessoas;
    // id_pessoa_dados: string;

    @Column()
    rg: string;


    @Column()
    cpf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;




    constructor() {
        if (!this.id_dados) {
            this.id_dados = uuid();
        }
    }
}