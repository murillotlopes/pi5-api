import { Response, Request } from 'express';
import operacaoServico from './operacao.servico';
import { UsuarioRepositorio } from '../usuario/usuario.repositorio';
import { Usuario } from '../../entities/Usuario';

class OperacaoController {
  public async listar(req: Request, res: Response) {
    try {
      const userId = req['usuario']

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

  public async atualizar(req: Request, res: Response) {
    try {
      const entidade = req.body
      await operacaoServico.atualizar(entidade)
      return res.status(200).end()
    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }

  public async apagar(req: Request, res: Response) {
    try {
      const operacaoId = +req.params.operacaoId
      await operacaoServico.apagar(operacaoId)
      return res.status(200).end()

    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }

}

export default new OperacaoController()