import { getRepository } from "typeorm";
import { PessoasDados } from "../entities/PessoasDados";
type PessoasDadosUpdateRequest = {
    id_dados: string;
    id_pessoa: string;
    rg: string;
    cpf: string;
}


export class UpdatePessoasDadosService {
    async execute({ id_dados, id_pessoa, rg, cpf }: PessoasDadosUpdateRequest): Promise<PessoasDados | Error> {
        const repo = getRepository(PessoasDados);

        const pessoa = await repo.findOne(id_pessoa);

        if (!pessoa) {
            return new Error("Cadastro não esta em nossa base de dados!");
        }


        // pessoa.id_pessoa = pessoa.id_pessoa;
        pessoa.rg = rg ? rg : pessoa.rg;
        pessoa.cpf = cpf ? cpf : pessoa.cpf;
        await repo.save(pessoa);

        return pessoa;

    }
}