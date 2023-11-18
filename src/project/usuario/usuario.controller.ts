import { Response, Request } from 'express';
import usuarioServico from './usuario.servico';

class UsuarioControler {

  public async criar(req: Request, res: Response) {
    try {
      const novo = await usuarioServico.criar(req.body)
      return res.status(201).json(novo)
    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }

  public async listar(req: Request, res: Response) {
    try {
      const user = await usuarioServico.listar()

      return res.json(user)

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
      const entidade_id = req.params.id

      await usuarioServico.atualizar(entidade_id, entidade)

      return res.json({ msg: `id ${entidade_id} atualizado` })
    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }

  public async apagar(req: Request, res: Response) {
    try {
      const entidade_id = req.params.id
      await usuarioServico.deletar(entidade_id)
      return res.json({ msg: `id ${entidade_id} apagado` })

    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const email = req.body.email
      const hashSenha = req.body.senha

      const tokenUsuario = await usuarioServico.login(email, hashSenha)
      return res.json(tokenUsuario)
    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }
}

export default new UsuarioControler()