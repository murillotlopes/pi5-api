import { Response, Request } from 'express';
import usuarioServico from "./usuario.servico"

class UsuarioControler {

  public async filtrarEntidade(req: Request, res: Response) {
    // try {
    //   let resultado = await usuarioServico.filtrarEntidade(req)
    //   return res.json(resultado)

    // } catch (error) {
    //   return res.status(500).json({ msg: 'Deu merda' })
    // }
  }
}

export default new UsuarioControler()