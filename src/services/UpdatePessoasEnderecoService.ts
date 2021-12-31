import { getRepository } from "typeorm";
import { PessoasEndereco } from "../entities/PessoasEndereco";
type PessoasEnderecoUpdateRequest = {
    id:string,
    cep:string;
    endereco:string;
    bairro:string;
    complemento:string;
    cidade:string;
    uf:string;
    id_pessoa:string;
}


export class UpdatePessoasEnderecoService {
    async execute({id, cep, endereco, bairro, complemento, cidade, uf, id_pessoa }: PessoasEnderecoUpdateRequest): Promise<PessoasEndereco | Error> {
        const repo = getRepository(PessoasEndereco);

        const pessoas_endereco = await repo.findOne(id);

        if (!pessoas_endereco) {
            return new Error("Cadastro não esta em nossa base de dados!");
        }


        // pessoa.id_pessoa = pessoa.id_pessoa;
        pessoas_endereco.cep = cep ? cep : pessoas_endereco.cep;
        pessoas_endereco.endereco = endereco ? endereco : pessoas_endereco.endereco;
        pessoas_endereco.bairro = bairro ? bairro : pessoas_endereco.bairro;
        pessoas_endereco.complemento = complemento ? complemento : pessoas_endereco.complemento;
        pessoas_endereco.cidade = cidade ? cidade : pessoas_endereco.cidade;
        pessoas_endereco.uf = uf ? uf : pessoas_endereco.uf;
        pessoas_endereco.id_pessoa = id_pessoa ? id_pessoa : pessoas_endereco.id_pessoa;

        await repo.save(pessoas_endereco);

        return pessoas_endereco;

    }
}