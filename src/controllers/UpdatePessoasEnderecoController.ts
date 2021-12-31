import { Request, Response } from "express";
import { UpdatePessoasEnderecoService } from "../services/UpdatePessoasEnderecoService";

export class UpdatePessoasEnderecoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { cep, endereco, bairro, complemento, cidade, uf, id_pessoa } = request.body;

        const service = new UpdatePessoasEnderecoService();
        const result = await service.execute({id, cep, endereco, bairro, complemento, cidade, uf, id_pessoa});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}