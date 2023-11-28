import { Usuario } from './../entities/Usuario';
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UsuarioRepositorio } from '../project/usuario/usuario.repositorio';
import { removerSenhaUsuario } from '../util/util';

const validaToken = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers?.authorization?.split(' ')[1]

  if (!token) {
    return res.status(400).json({ message: "Token de autorização não encontrado" })
  }

  return verify(token, process.env.SECRET_KEY, async (err: VerifyErrors, decoded: string | JwtPayload | Usuario) => {
    if (err) {
      return res.status(400).json({ message: "Token de autorização inválido" })
    }

    const login = decoded as Usuario

    const usuario = await new UsuarioRepositorio().usuarioId(login.id)

    req['usuario'] = removerSenhaUsuario(usuario) as Usuario

    return next()
  })
}

export default validaToken