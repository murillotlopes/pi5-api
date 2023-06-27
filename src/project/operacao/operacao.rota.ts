import { Router } from "express";
import operacaoController from "./operacao.controller";

const operacaoRota = Router()

operacaoRota.get('/listar/:userId', operacaoController.listar)
operacaoRota.post('/salvar', operacaoController.salvar)

export default operacaoRota