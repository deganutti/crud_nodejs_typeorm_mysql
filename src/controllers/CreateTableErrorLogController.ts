import { getRepository } from 'typeorm';
import { Request, Response } from "express";
import { CreateErrorLogService } from "../services/CreateTableErrorLog";

export class CreateTableErrorLogController {
    async handle(request: Request, response: Response) {
        const { tabela, log} = request.body;

        const service = new CreateErrorLogService();
        const result = await service.execute({
            tabela,
            log
        });

        if (result instanceof Error) {
            return response.redirect("/log");
             


            //return response.status(400).json(result.message);
        }
        return response.json(result);
    }

}