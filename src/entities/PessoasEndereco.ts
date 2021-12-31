import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Pessoas } from "./Pessoas";

@Entity("pessoas_endereco")
export class PessoasEndereco {
    @PrimaryColumn()
    id: string;

    @Column()
    id_pessoa:string;

    @ManyToOne(() => Pessoas)
    @JoinColumn({name:"id_pessoa"})
    pessoas_endereco: Pessoas;

    @Column()
    cep: string;

    @Column()
    endereco: string;

    @Column()
    bairro: string;

    @Column()
    complemento: string;

    @Column()
    cidade: string;

    @Column()
    uf: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}