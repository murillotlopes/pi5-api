import { Usuario } from "../entities/Usuario";

export const removerSenhaUsuario = (usuario: Usuario) => {
  const { senha, ...usuarioSemSenha } = usuario
  return usuarioSemSenha
}
