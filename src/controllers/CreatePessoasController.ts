import { Request, Response } from "express";
import { CreatePessoasService } from "../services/CreatePessoasService";

export class CreatePessoasController {
    async handle(request: Request, response: Response) {
        const { nome, apelido, nacimento } = request.body;

        const service = new CreatePessoasService();
        const result = await service.execute({
            nome,
            apelido,
            nacimento
        });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}