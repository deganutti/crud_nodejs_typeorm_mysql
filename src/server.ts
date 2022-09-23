import express from "express";
import "reflect-metadata";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(80, () => console.log("Servidor Anteres On-line"));




/**
 * Arquivo Server, todas as informações de conexão sera feito aqui.
 * 
*/