import { Response, Request } from 'express';
import tituloServico from './titulo.servico';


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
}

export default new TituloController()