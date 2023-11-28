import { Router } from "express";
import operacaoController from "./operacao.controller";
import validaToken from "../../middlewares/autenticacao";

const operacaoRota = Router()

operacaoRota.get('/listar', validaToken, operacaoController.listar)
operacaoRota.post('/salvar', validaToken, operacaoController.salvar)
operacaoRota.patch('/atualizar', validaToken, operacaoController.atualizar)
operacaoRota.delete('/apagar/:operacaoId', validaToken, operacaoController.apagar)

export default operacaoRota