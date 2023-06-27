import { Express } from 'express'
import usuarioRota from './usuario/usuario.rota'
import operacaoRota from './operacao/operacao.rota'
import tituloRota from './tituloInvestimento/titulo.rota'

const registroRotas = (app: Express): void => {
    app.use('/usuario', usuarioRota)
    app.use('/operacao', operacaoRota)
    app.use('/titulo', tituloRota)
}

export default registroRotas