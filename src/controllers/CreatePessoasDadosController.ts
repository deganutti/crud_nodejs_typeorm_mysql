import { Request, Response } from "express";
import { CreatePessoasDadosService } from "../services/CreatePessoasDadosService";

export class CreatePessoasDadosController {
    async handle(request: Request, response: Response) {
        const { id_pessoa } = request.params;
        const { rg, cpf } = request.body;

        const service = new CreatePessoasDadosService();
        const result = await service.execute({
            rg, cpf, id_pessoa
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}