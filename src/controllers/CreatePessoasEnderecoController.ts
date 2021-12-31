import { Request, Response } from "express";
import { CreatePessoasEnderecoService } from "../services/CreatePessoasEnderecoService";

export class CreatePessoasEnderecoController {
    async handle(request: Request, response: Response) {
        const { id_pessoa } = request.params;
        const { cep, endereco, bairro, complemento, cidade, uf } = request.body;

        const service = new CreatePessoasEnderecoService();
        const result = await service.execute({ cep, endereco, bairro, complemento, cidade, uf, id_pessoa });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}