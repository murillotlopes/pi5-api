import { Repository } from "typeorm"
import { Operacao } from "../../entities/Operacao"
import { AppDataSource } from "../../data-source"
import { Usuario } from "../../entities/Usuario"

export class OperacaoRepositorio {
  private rep: Repository<Operacao>

  constructor() {
    this.rep = AppDataSource.getRepository(Operacao)
  }

  public async listar(usuarioId: number) {
    return await this.rep.find({
      where: {
        usuario: { id: usuarioId }
      }
    })
  }

  public async salvar(entidade: Operacao) {
    return await this.rep.save(entidade)
  }

  public async atualizar(entidade: Operacao) {
    return await this.rep.update({ id: entidade.id }, entidade)
  }

  public async apagar(operacaoId: number) {
    return await this.rep.delete({ id: operacaoId })
  }

}

export default new OperacaoRepositorio()