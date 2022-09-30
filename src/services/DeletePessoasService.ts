import { getRepository } from "typeorm";
import { Pessoas } from "../entities/Pessoas";

export class DeletePessoasService {
    async execute(id_pessoa: string, email: string) {
        const repo = getRepository(Pessoas);



        const pessoas = await repo.findOne(
            {
                where: {
                    id_pessoa: id_pessoa,
                    email: email,
                }
            })
            
        console.log(pessoas);
        if (!pessoas) {
            return new Error("Pessoa não existe!");
        }
        await repo.remove(pessoas);
    }
}