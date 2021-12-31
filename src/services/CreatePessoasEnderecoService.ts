import { getRepository } from "typeorm";
import { PessoasEndereco } from "../entities/PessoasEndereco";
type PessoasEnderecoRequest = {
    cep:string;
    endereco:string;
    bairro:string;
    complemento:string;
    cidade:string;
    uf:string;
    id_pessoa:string;
}


export class CreatePessoasEnderecoService {
    async execute({ cep, endereco, bairro, complemento, cidade, uf, id_pessoa }: PessoasEnderecoRequest): Promise<PessoasEndereco|Error> {
        const repo = getRepository(PessoasEndereco);

        /*
        if(!await repo.findOne({id_pessoa})){
            return new Error("Pessoa não localizada em nossa base de dados.");
        }

        */
        const pessoas_endereco = repo.create({
            cep,
            endereco,
            bairro,
            complemento,
            cidade,
            uf,
            id_pessoa
        });
        await repo.save(pessoas_endereco);
        return pessoas_endereco;
    }
}