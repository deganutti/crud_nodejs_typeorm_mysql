import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";
type PessoasRequest = {
    nome: string;
    apelido: string;
    nacimento: Date;
}

export class GetAllPessoasService {
    async execute() {
        const repo = getRepository(Pessoas);
        const pessoas = await repo.find({
            // relations: ['pessoas_endereco'],
        });
        return pessoas;
        //console.log("Implementations");
    }
}