import { Operacao } from "../../entities/Operacao"
import { Usuario } from "../../entities/Usuario"
import operacaoRepositorio from "./operacao.repositorio"

export class OperacaoServico {
  public async listar(usuarioId: number) {
    const operacoes: Operacao[] = await operacaoRepositorio.listar(usuarioId)

    return operacoes
  }

  public async salvar(entidade: Operacao) {
    const operacaoSalvo = await operacaoRepositorio.salvar(entidade)
    return operacaoSalvo
  }

  public async atualizar(entidade: Operacao) {
    return await operacaoRepositorio.atualizar(entidade)
  }

  public async apagar(operacaoId: number) {
    return await operacaoRepositorio.apagar(operacaoId)
  }

}

export default new OperacaoServico()