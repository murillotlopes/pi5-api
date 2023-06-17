import { Router } from 'express';
import usuarioController from './usuario.controller';


const usuarioRota = Router()

usuarioRota.post('/criar', usuarioController.criar)
usuarioRota.post('/login', usuarioController.login)
usuarioRota.get('/listar', usuarioController.listar)
usuarioRota.patch('/atualizar/:id', usuarioController.atualizar)
usuarioRota.delete('/apagar/:id', usuarioController.apagar)

export default usuarioRota