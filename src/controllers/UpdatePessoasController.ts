import { Request, Response } from "express";
import { UpdatePessoasService } from "../services/UpdatePessoasService";

export class UpdatePessoasController {
    async handle(request: Request, response: Response) {
        const { id_pessoa } = request.params;
        const { razao, fantasia, ie, cnpj , tipo} = request.body;

        const service = new UpdatePessoasService();
        const result = await service.execute({ id_pessoa, razao, fantasia, ie, cnpj , tipo});

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}