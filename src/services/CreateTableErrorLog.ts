import { getRepository } from "typeorm";
import { ErrorLog } from "../entities/TableErrorLogs";
type ErrorLogRequest = {
    tabela: string;
    log: string;
}

export class CreateErrorLogService {
    async execute({ tabela, log }: ErrorLogRequest): Promise<ErrorLog | Error> {

        /**
         * Tentativa de salvar o console.error como arquivo de log.
         */
        const repo = getRepository(ErrorLog);
        const logs = repo.create({
            tabela,
            log
        });
        try {
            await repo.save(logs);
        } catch (e) {
            console.error(e); 

            return new Error("Erro ao cadastrar dados " + (e as Error).message);
        }
        return logs;
    }
}