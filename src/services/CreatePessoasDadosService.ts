import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";
import { PessoasDados } from "../entities/PessoasDados";
type PessoasDadosRequest = {
    id_pessoa: string;
    rg: string;
    cpf: string;
}

export class CreatePessoasDadosService {
    async execute({ rg, cpf, id_pessoa }: PessoasDadosRequest): Promise<PessoasDados | Error> {

        const repoPessoas = getRepository(Pessoas);
        const pessoa = await repoPessoas.findOne(id_pessoa);
        if (!pessoa) {
            return new Error("Cadastro não esta em nossa base de dados!");
        }

        const repo = getRepository(PessoasDados);
        const pessoasDados = repo.create({
            id_pessoa,
            rg,
            cpf
        });
        try {
            await repo.save(pessoasDados);
        } catch (e) {
            return new Error("Erro ao cadastrar dados " + (e as Error).message);
        }
        return pessoasDados;
    }
}