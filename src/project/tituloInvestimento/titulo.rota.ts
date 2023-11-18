import { Router } from "express";
import tituloController from "./titulo.controller";

const tituloRota = Router()

tituloRota.get('/buscar/:ticket', tituloController.buscar)
tituloRota.get('/meus-titulos', tituloController.meusTitulos)

export default tituloRota