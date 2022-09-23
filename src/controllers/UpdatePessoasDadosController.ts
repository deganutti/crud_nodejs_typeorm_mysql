import { Request, Response } from "express";
import { UpdatePessoasDadosService } from "../services/UpdatePessoasDadosService";

export class UpdatePessoasDadosController {
    async handle(request: Request, response: Response) {
        const { id_pessoa, id_dados } = request.params;
        const { rg, cpf } = request.body;

        const service = new UpdatePessoasDadosService();
        const result = await service.execute({ id_pessoa, id_dados, rg, cpf });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}