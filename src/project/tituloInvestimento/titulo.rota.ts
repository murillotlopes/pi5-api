import { Router } from "express";
import tituloController from "./titulo.controller";
import validaToken from "../../middlewares/autenticacao";

const tituloRota = Router()

tituloRota.get('/buscar/:ticket', validaToken, tituloController.buscar)
tituloRota.get('/meus-titulos', validaToken, tituloController.meusTitulos)
tituloRota.get('/meus-titulos-grafico', validaToken, tituloController.meusTitulosGrafico)
tituloRota.get('/operacao-titulo/:tituloId', validaToken, tituloController.operacaoPorTitulo)

export default tituloRota