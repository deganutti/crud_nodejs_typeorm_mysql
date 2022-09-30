import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";
import {CreateTableErrorLogController } from "../controllers/CreateTableErrorLogController";
type PessoasRequest = {
    nome: string;
    apelido: string;
    nacimento: Date;
    email: string;
}

export class CreatePessoasService {
    async execute({ nome, apelido, nacimento, email }: PessoasRequest): Promise<Pessoas | Error> {

        /**
         * Tentativa de salvar o console.error como arquivo de log.
         */
        const repo = getRepository(Pessoas);
        const pessoas = repo.create({
            nome,
            apelido,
            nacimento,
            email
            /**
             * Email é unique key
             */
        });
        try {
            await repo.save(pessoas);
        } catch (e) {
            console.error(JSON.stringify(e, null, 2));
            return new Error("tabela:pessoa,"+"log: " + JSON.stringify(e, null, 2));
        }
        return pessoas;
    }
}