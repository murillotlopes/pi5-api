import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Usuario } from '../../entities/Usuario';
import { removerSenhaUsuario } from '../../util/util';

export class UsuarioRepositorio {
  private rep: Repository<Usuario>

  constructor() {
    this.rep = AppDataSource.getRepository(Usuario)
  }


  public async criar(entidade: Usuario) {
    return await this.rep.save(entidade)
  }

  public async listar() {
    return await this.rep.find()
  }

  public async atualizar(entidade_id: string, entidade: {}) {
    await this.rep.update(entidade_id, entidade)
  }

  public async deletar(entidade_id) {
    return await this.rep.delete(entidade_id)
  }

  public async usuario(emailUsuario: string) {
    return await this.rep.findOne({ where: { email: emailUsuario } })
  }

  public async usuarioId(usuarioId: number) {
    const usuario = await this.rep.findOne({ where: { id: usuarioId } })

    return removerSenhaUsuario(usuario)
  }
}

export default new UsuarioRepositorio()