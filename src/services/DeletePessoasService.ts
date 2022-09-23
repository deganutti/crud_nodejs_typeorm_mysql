import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";

export class DeletePessoasService {
    async execute(id_pessoa: string) {
        const repo = getRepository(Pessoas);

        if (!await repo.findOne({ where: { id_pessoa: id_pessoa } })) {
            return new Error("Pessoa não existe!");
        }
        await repo.delete(id_pessoa);
    }
}