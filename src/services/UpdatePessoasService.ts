import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";
type PessoasUpdateRequest = {
    id_pessoa: string;
    nome: string;
    apelido: string;
    nacimento: Date;
}


export class UpdatePessoasService {
    async execute({ id_pessoa, nome, apelido, nacimento }: PessoasUpdateRequest): Promise<Pessoas | Error> {
        const repo = getRepository(Pessoas);

        const pessoa = await repo.findOne(id_pessoa);

        if (!pessoa) {
            return new Error("Cadastro não esta em nossa base de dados!");
        }


        // pessoa.id_pessoa = pessoa.id_pessoa;
        pessoa.nome = nome ? nome : pessoa.nome;
        pessoa.apelido = apelido ? apelido : pessoa.apelido;
        pessoa.nacimento = nacimento ? nacimento : pessoa.nacimento;
        await repo.save(pessoa);

        return pessoa;

    }
}