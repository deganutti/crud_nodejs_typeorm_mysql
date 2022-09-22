import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";
type PessoasRequest = {
    nome: string;
    apelido: string;
    nacimento: Date;
}

export class CreatePessoasService {
    async execute({ nome, apelido, nacimento }: PessoasRequest): Promise<Pessoas | Error> {
        const repo = getRepository(Pessoas);
        const pessoas = repo.create({
            nome,
            apelido,
            nacimento
        });
        try {
            await repo.save(pessoas);
        } catch (e) {
            return new Error("Erro ao cadastrar nova pessoa " + (e as Error).message);
        }
        return pessoas;
    }
}