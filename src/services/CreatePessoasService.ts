import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";
type PessoasRequest = {
    nome: string;
    apelido: string;
    nacimento: Date;
    email: string;
}

export class CreatePessoasService {
    async execute({ nome, apelido, nacimento, email }: PessoasRequest): Promise<Pessoas | Error> {

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
            console.error(e);
            return new Error("Email já cadastrado!");
        }
        return pessoas;
    }
}