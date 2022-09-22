import { Router } from "express";
/**
 * Pessoas
*/
import { CreatePessoasController } from "./controllers/CreatePessoasController";
import { GetAllPessoasController } from "./controllers/GetAllPessoasController";
import { DeletePessoasController } from "./controllers/DeletePessoasController";
import { UpdatePessoasController } from "./controllers/UpdatePessoasController";
/**
 * Dados
 */
import { CreatePessoasDadosController } from "./controllers/CreatePessoasDadosController";
import { GetAllPessoasDadosController } from "./controllers/GetAllPessoasDadosController";

/**
 * Endereço
*/
import { CreatePessoasEnderecoController } from "./controllers/CreatePessoasEnderecoController";
import { DeletePessoasEnderecoController } from "./controllers/DeletePessoasEnderecoController";
import { GetAllPessoasEnderecoController } from "./controllers/GetAllPessoasEnderecoController";
import { UpdatePessoasEnderecoController } from "./controllers/UpdatePessoasEnderecoController";

const routes = Router();

routes.get("/pessoas", new GetAllPessoasController().handle);
routes.post("/pessoas", new CreatePessoasController().handle);
routes.put("/pessoas/:id_pessoa", new UpdatePessoasController().handle);
routes.delete("/pessoas/:id_pessoa", new DeletePessoasController().handle);

/**
 * Dados - Documentos
 */

routes.get("/pessoas/dados", new GetAllPessoasDadosController().handle);
routes.post("/pessoas/dados", new CreatePessoasDadosController().handle);

/**
 * Endereço
*/
routes.get("/pessoas_endereco", new GetAllPessoasEnderecoController().handle);
routes.post("/pessoas_endereco/:id_pessoa", new CreatePessoasEnderecoController().handle);
routes.put("/pessoas_endereco/:id_pessoa", new UpdatePessoasEnderecoController().handle);
routes.delete("/pessoas_endereco/:id", new DeletePessoasEnderecoController().handle);


export { routes }