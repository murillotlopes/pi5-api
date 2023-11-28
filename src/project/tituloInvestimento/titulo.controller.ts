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
      let usuario: Usuario = req['usuario']

      return res.json(await tituloServico.meusTitulos(usuario))
    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }

  public async operacaoPorTitulo(req: Request, res: Response) {
    try {
      const usuario: Usuario = req['usuario']
      const tituloId = +req.params.tituloId

      return res.json(await tituloServico.operacaoPorTitulo(tituloId, usuario))
    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }

  public async meusTitulosGrafico(req: Request, res: Response) {
    try {
      let usuario: Usuario = req['usuario']

      return res.json(await tituloServico.meusTitulosGrafico(usuario))
    } catch (error) {
      return res.status(400).json({
        msg: error.message,
        detalhe: error.detail,
      })
    }
  }


}

export default new TituloController()