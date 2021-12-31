import { Request, Response } from "express";
import { DeletePessoasEnderecoService } from "../services/DeletePessoasEnderecoService";

export class DeletePessoasEnderecoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const service = new DeletePessoasEnderecoService();

        const result = await service.execute(id);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();

    }
}