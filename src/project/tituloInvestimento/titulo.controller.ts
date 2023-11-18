import { Response, Request } from 'express';
import tituloServico from './titulo.servico';
import { Usuario } from '../../entities/Usuario';
import { UsuarioRepositorio } from '../usuario/usuario.repositorio';


class TituloController {

  public async buscar(req: Request, res: Response) {
    try {
      const ticket = req.params.ticket
      return res.json(await tituloServico.buscar(ticket))
    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }

  public async meusTitulos(req: Request, res: Response) {
    try {
      const usuarioRep = new UsuarioRepositorio()
      let usuario: Usuario = await usuarioRep.usuarioId(4)
      return res.json(await tituloServico.meusTitulos(usuario))
    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }
}

export default new TituloController()