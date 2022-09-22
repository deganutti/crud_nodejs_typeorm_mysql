import { getRepository } from "typeorm";
import { PessoasDados } from "../entities/PessoasDados";

export class GetAllPessoasDadosService {
    async execute() {
        const repo = getRepository(PessoasDados);
        const pessoasdados = await repo.find({
            //   relations: ['pessoasdados'],
        });
        return pessoasdados;
        //console.log("Implementations");
    }
}