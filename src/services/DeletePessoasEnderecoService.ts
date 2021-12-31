import { getRepository } from "typeorm";
import { PessoasEndereco } from "../entities/PessoasEndereco";

export class DeletePessoasEnderecoService{
    async execute(id:string){
        const repo = getRepository(PessoasEndereco);

        if(!await repo.findOne(id)){
            return new Error("Endereço não existe!");
        }        
        await repo.delete(id);
    }
}