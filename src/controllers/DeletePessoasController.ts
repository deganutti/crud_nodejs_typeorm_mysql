import { Request, Response } from "express";
import { DeletePessoasService } from "../services/DeletePessoasService";

export class DeletePessoasController {
    async handle(request: Request, response: Response) {
        const { id_pessoa, email } = request.body;
        const service = new DeletePessoasService();

        const result = await service.execute(id_pessoa, email);
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();

    }
}