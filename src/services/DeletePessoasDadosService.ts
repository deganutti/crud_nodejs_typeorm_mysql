import { getRepository } from "typeorm";
import { PessoasDados } from "../entities/PessoasDados";

export class DeletePessoasDadosService {
    async execute(id_pessoa: string) {
        const repo = getRepository(PessoasDados);

        if (!await repo.findOne(id_pessoa)) {
            return new Error("Pessoa não existe!");
        }
        await repo.delete(id_pessoa);
    }
}