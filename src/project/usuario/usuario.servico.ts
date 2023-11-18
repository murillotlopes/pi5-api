import usuarioRepositorio from "./usuario.repositorio"
import { Usuario } from '../../entities/Usuario';
import { compare, hash } from 'bcryptjs';
import { sign } from "jsonwebtoken";
import { env } from "process";
import { removerSenhaUsuario } from "../../util/util";

export class UsuarioServico {

  public async criar(entidade: Usuario) {
    entidade.senha = await hash(entidade.senha, 12)
    const novoUsuario = await usuarioRepositorio.criar({ ...entidade })

    return removerSenhaUsuario(novoUsuario)
  }

  public async listar() {
    const usuarios: Usuario[] = await usuarioRepositorio.listar()
    const usuariosSemSenha = []
    for (const us of usuarios) {
      usuariosSemSenha.push(removerSenhaUsuario(us))
    }

    return usuariosSemSenha
  }

  public async atualizar(entidade_id: string, entidade: {}) {
    await usuarioRepositorio.atualizar(entidade_id, entidade)
  }

  public async deletar(entidade_id: string) {
    const deletado = await usuarioRepositorio.deletar(entidade_id)
    return deletado
  }

  public async login(email: string, hashSenha: string) {
    const emailUsuario: Usuario = await usuarioRepositorio.usuario(email)

    if (!emailUsuario) {
      throw new Error('E-mail ou senha incorretos!')
    } else {
      if (await compare(hashSenha, emailUsuario.senha)) {
        const { senha, ...usuario } = emailUsuario
        const token = sign(usuario, env.SECRET_KEY, {
          expiresIn: env.EXPIRES_IN,
        })

        return { token: token, usuario: usuario }
      } else {
        throw new Error('E-mail ou senha incorretos!')
      }
    }
  }
}

export default new UsuarioServico()