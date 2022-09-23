import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";
import { PessoasSituacao } from "../entities/PessoasSituacao";
type PessoasDadosRequest = {
    id_pessoa: string;
    situacao: boolean;
}

export class CreatePessoasSituacaoService {
    async execute({ id_pessoa, situacao }: PessoasDadosRequest): Promise<PessoasSituacao | Error> {

        const repoPessoas = getRepository(Pessoas);
        const pessoa = await repoPessoas.findOne(id_pessoa);
        if (!pessoa) {
            return new Error("Cadastro não esta em nossa base de dados!");
        }
        const repoSituacao = getRepository(PessoasSituacao);

        const situacaoExists = await repoSituacao.findOne(
            {
                where: {
                    id_pessoa: id_pessoa,
                },
            }
        );
        if (situacaoExists) {
            return new Error("Cadastro já possuí situacao cadastrada!");
        }
        const repo = getRepository(PessoasSituacao);
        const pessoasSituacao = repo.create({
            id_pessoa,
            situacao,
        });
        try {
            await repo.save(pessoasSituacao);
        } catch (e) {
            return new Error("Erro ao cadastrar dados " + (e as Error).message);
        }
        return pessoasSituacao;
    }
}