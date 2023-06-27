import { Response, Request } from 'express';
import operacaoServico from './operacao.servico';

class OperacaoController {
    public async listar(req: Request, res: Response) {
        try {
            const userId = +req.params.userId

            const operacoes = await operacaoServico.listar(userId)

            return res.json(operacoes)
        } catch (error) {
            return res.status(400).json({
                msg: error.message,
                detalhe: error.detail,
            })
        }
    }

    public async salvar(req: Request, res: Response) {
        try {
            const entidade = req.body

            const operacaoSalvo = await operacaoServico.salvar(entidade)
            return res.json(operacaoSalvo)
        } catch (error) {
            return res.status(400).json({
                msg: error.message,
                detalhe: error.detail,
            })
        }
    }

}

export default new OperacaoController()