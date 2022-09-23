import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, Unique, OneToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Pessoas } from "./Pessoas";

@Entity("pessoassituacao")
export class PessoasSituacao {
    @PrimaryColumn()
    id_situacao: string;

    @Column()
    id_pessoa:string;

    @OneToOne(() => Pessoas)
    @JoinColumn({name:"id_pessoa"})
    pessoassituacao: Pessoas;

    @Column()
    situacao: boolean;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor() {
        if (!this.id_situacao) {
            this.id_situacao = uuid();
        }
    }
}