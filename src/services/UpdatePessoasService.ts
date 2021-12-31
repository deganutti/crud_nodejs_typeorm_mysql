import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";
type PessoasUpdateRequest = {
    id_pessoa: string;
    razao: string;
    fantasia: string;
    ie: string;
    cnpj: string;
    tipo: string;
}


export class UpdatePessoasService {
    async execute({ id_pessoa, razao, fantasia, ie, cnpj, tipo }: PessoasUpdateRequest): Promise<Pessoas | Error> {
        const repo = getRepository(Pessoas);

        const pessoa = await repo.findOne(id_pessoa);

        if (!pessoa) {
            return new Error("Cadastro não esta em nossa base de dados!");
        }


        // pessoa.id_pessoa = pessoa.id_pessoa;
        pessoa.razao = razao ? razao : pessoa.razao;
        pessoa.fantasia = fantasia ? fantasia : pessoa.fantasia;
        pessoa.ie = ie ? ie : pessoa.ie;
        pessoa.cnpj = cnpj ? cnpj : pessoa.cnpj;
        pessoa.tipo = tipo ? tipo : pessoa.tipo;

        await repo.save(pessoa);

        return pessoa;

    }
}