import { getRepository } from "typeorm";
import { PessoasDados } from "../entities/PessoasDados";

export class DeletePessoasDadosService {
    async execute(id_dados: string) {
        const repo = getRepository(PessoasDados);

        if (!await repo.findOne(id_dados)) {
            return new Error("Pessoa não existe!");
        }
        await repo.delete(id_dados);
    }
}