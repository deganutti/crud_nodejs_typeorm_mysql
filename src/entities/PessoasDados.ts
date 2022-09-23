import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Pessoas } from "./Pessoas";
//import { PessoasEndereco } from "./PessoasEndereco";

@Entity("pessoasdados")
export class PessoasDados {
    @PrimaryColumn()
    id_dados: string;

    @PrimaryColumn()
    @Column()
    id_pessoa: string;

    @ManyToOne(() => Pessoas)
    @JoinColumn({ name: "id_pessoa" })
    pessoasdados: Pessoas;

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