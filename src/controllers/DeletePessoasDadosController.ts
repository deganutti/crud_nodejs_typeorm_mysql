import { Request, Response } from "express";
import { DeletePessoasDadosService } from "../services/DeletePessoasDadosService";

export class DeletePessoasDadosController {
    async handle(request: Request, response: Response) {
        const { id_dados } = request.params;
        const service = new DeletePessoasDadosService();

        const result = await service.execute(id_dados);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();

    }
}