import { Operacao } from "../../entities/Operacao"
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
}

export default new OperacaoServico()