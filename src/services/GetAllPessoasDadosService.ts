import { getRepository } from "typeorm";
import { PessoasDados } from "../entities/PessoasDados";

export class GetAllPessoasDadosService {
    async execute() {
        const repo = getRepository(PessoasDados);
        const pessoasDados = await repo.find({
            relations: ['pessoasdados'],
        });
        return pessoasDados;
        //console.log("Implementations");
    }
}