import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn,Unique } from "typeorm";
import { v4 as uuid } from "uuid";
//import { PessoasEndereco } from "./PessoasEndereco";

@Entity("errorlog")
export class ErrorLog {
    @PrimaryColumn()
    id_log: string;

    @Column()
    tabela: string;

    @Column()
    log: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id_log) {
            this.id_log = uuid();
        }
    }
}