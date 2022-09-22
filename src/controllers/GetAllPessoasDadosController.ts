import { Request, Response } from "express";
import { GetAllPessoasDadosService } from "../services/GetAllPessoasDadosService";

export class GetAllPessoasDadosController {
    async handle(request: Request, response: Response) {

        const service = new GetAllPessoasDadosService();

        const pessoas = await service.execute();

        return response.json(pessoas);
    }

}