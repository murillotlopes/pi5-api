import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { TituloInvestimento } from "../../entities/TituloInvestimento"

class TituloRepositorio {
  private rep: Repository<TituloInvestimento>

  constructor() {
    this.rep = AppDataSource.getRepository(TituloInvestimento)
  }

  public async lista(userId: number) {
    const query = this.rep.createQueryBuilder('t')
      .select('t.ticket', 'ticket')
      .addSelect('t.tipo', 'tipo')
      .addSelect('COALESCE(sum(o.quantidade) ,0.00)')
      .innerJoin('t.operacoes', 'o')
      .innerJoin('t.rendimentos', 'r')
      .innerJoin('o.usuario', 'u')
      .where(`u.id = ${userId}`)

    return query.getMany()
  }

  public async buscar(ticket: string) {
    return await this.rep.find({ where: { ticket } })
  }

  public async salvar(entidade: TituloInvestimento) {
    return await this.rep.save(entidade)
  }

}

export default new TituloRepositorio()