import { Router } from 'express';
import usuarioController from './usuario.controller';
import validaToken from '../../middlewares/autenticacao';


const usuarioRota = Router()

usuarioRota.post('/criar', usuarioController.criar)
usuarioRota.post('/login', usuarioController.login)
usuarioRota.get('/listar', validaToken, usuarioController.listar)
usuarioRota.patch('/atualizar/:id', validaToken, usuarioController.atualizar)
usuarioRota.delete('/apagar/:id', validaToken, usuarioController.apagar)

export default usuarioRota