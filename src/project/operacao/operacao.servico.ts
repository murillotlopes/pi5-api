import { Operacao } from "../../entities/Operacao"
import operacaoRepositorio from "./operacao.repositorio"

export class OperacaoServico {
    public async listar(usuarioId: number) {
        const operacoes: Operacao[] = await operacaoRepositorio.listar(usuarioId)

        return operacoes
    }

    public async salvar(entidade) {
        const operacaoSalvo = await operacaoRepositorio.salvar(entidade)
    }
}

export default new OperacaoServico()