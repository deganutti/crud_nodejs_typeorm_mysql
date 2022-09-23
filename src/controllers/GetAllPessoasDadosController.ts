import { Request, Response } from "express";
import { GetAllPessoasDadosService } from "../services/GetAllPessoasDadosService";

export class GetAllPessoasDadosController {
    async handle(request: Request, response: Response) {

        const service = new GetAllPessoasDadosService();

        const pessoasDados = await service.execute();

        return response.json(pessoasDados);
    }

}