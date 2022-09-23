import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";

export class GetAllPessoasService {
    async execute() {
        const repo = getRepository(Pessoas);
        const pessoas = await repo.find({
            //           relations: ['pessoasdados'],
        });
        return pessoas;
    }
}