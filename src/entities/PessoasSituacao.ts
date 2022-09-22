import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, Unique } from "typeorm";
import { v4 as uuid } from "uuid";
import { Pessoas } from "./Pessoas";

@Entity("pessoas_situcao")
export class PessoasSituacao {
    @PrimaryColumn()
    id: string;

    @Column()
    id_pessoa:string;

    @ManyToOne(() => Pessoas)
    @JoinColumn({name:"id_pessoa"})
    pessoas_situacao: Pessoas;

    @Column()
    situacao: string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}