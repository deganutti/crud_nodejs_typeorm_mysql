import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Pessoas } from "./Pessoas";

@Entity("pessoasendereco")
export class PessoasEndereco {
    @PrimaryColumn()
    id: string;

    @Column()
    id_pessoa: string;

    @ManyToOne(() => Pessoas)
    @JoinColumn({ name: "id_pessoa" })
    pessoas_dados: Pessoas;

    @Column()
    cep: string;

    @Column()
    tipo_logradouro: string;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    uf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}