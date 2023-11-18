import { Repository } from "typeorm"
import { Operacao } from "../../entities/Operacao"
import { AppDataSource } from "../../data-source"

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

}

export default new OperacaoRepositorio()