import { Request, Response } from "express";
import { CreatePessoasSituacaoService } from "../services/CreatePessoasSituacaoService";

export class CreatePessoasSituacaoController {
    async handle(request: Request, response: Response) {
        const { id_pessoa } = request.params;
        const { situacao } = request.body;

        const service = new CreatePessoasSituacaoService();
        const result = await service.execute({
            id_pessoa,
            situacao
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}