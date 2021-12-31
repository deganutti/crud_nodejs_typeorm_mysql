import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";
type PessoasRequest = {
    razao: string;
    fantasia: string;
    ie: string;
    cnpj: string;
    tipo: string;
}


export class CreatePessoasService {
    async execute({ razao, fantasia, ie, cnpj, tipo }: PessoasRequest): Promise<Pessoas|Error> {
        const repo = getRepository(Pessoas);

        if(await repo.findOne({cnpj})){
            return new Error("CNPJ já cadastrado em nossa base de dados!");
        }

        const pessoas = repo.create({
            razao,
            fantasia,
            ie,
            cnpj,
            tipo,
        });
        await repo.save(pessoas);
        return pessoas;
    }
}