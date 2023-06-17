import usuarioRepositorio from "./usuario.repositorio"
import { Usuario } from '../../entities/Usuario';
import { compare, hash } from 'bcryptjs';
import { sign } from "jsonwebtoken";
import { env } from "process";

export class UsuarioServico {

  public async criar(entidade: Usuario) {
    entidade.senha = await hash(entidade.senha, 12)
    const novoUsuario = await usuarioRepositorio.criar({ ...entidade })

    const { senha, ...usuarioSemSenha } = novoUsuario
    return usuarioSemSenha


  }

  public async listar() {
    const usuarios: Usuario[] = await usuarioRepositorio.listar()
    const usuariosSemSenha = []
    for (const us of usuarios) {
      const { senha, ...usss } = us
      usuariosSemSenha.push(usss)
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
    const emailUsuario: Usuario[] = await usuarioRepositorio.usuario(email)

    if (emailUsuario.length === 0) {
      throw new Error('E-mail ou senha incorretos!')
    } else {
      if (compare(hashSenha, emailUsuario[0].senha)) {
        const { senha, ...usuario } = emailUsuario[0]
        const token = sign(usuario, env.SECRET_KEY, {
          expiresIn: env.EXPIRES_IN,
        })
        return token
      } else {
        throw new Error('E-mail ou senha incorretos!')
      }
    }
  }
}

export default new UsuarioServico()