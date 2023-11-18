import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { TituloInvestimento } from "../../entities/TituloInvestimento"
import { Usuario } from "../../entities/Usuario"
import { Operacao } from "../../entities/Operacao"

export interface MeusInvestimentosType {
  id: number,
  ticket: string,
  nome_empresa: string,
  valor: number,
  quantidade: number,
  custo_medio: number,
  recomendacao: string
}

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
    return await this.rep.findOne({ where: { ticket: ticket.toUpperCase() } })
  }

  public async salvar(entidade: TituloInvestimento) {
    await this.rep.save(entidade).then(ent => {
      return ent
    }).catch(err => {
      throw err
    })
  }

  public async meusTitulos(usuario: Usuario) {

    const titulos = await this.rep.createQueryBuilder('ti')
      .select('ti.ticket', 'ticket')
      .addSelect('ti.nome_empresa', 'nome_empresa')
      .addSelect('ti.id', 'id')
      .addSelect(subQuery => {
        return subQuery.select(`coalesce (sum(case when o2.tipo_operacao = 'C' then o2.quantidade * o2.valor else (o2.quantidade * o2.valor) * -1 end ), 0)`).from(Operacao, 'o2').where('o2.titulo_investimento_id = ti.id')
      }, 'valor')
      .addSelect(subQuery => {
        return subQuery.select(`coalesce (sum(case when o2.tipo_operacao = 'C' then o2.quantidade else o2.quantidade * -1 end ), 0) `).from(Operacao, 'o2').where('o2.titulo_investimento_id = ti.id')
      }, 'quantidade')
      .addSelect(subQuery => {
        return subQuery.select(`coalesce (avg(case when o2.tipo_operacao = 'C' then o2.valor else o2.valor * -1 end ), 0)`).from(Operacao, 'o2').where('o2.titulo_investimento_id = ti.id')
      }, 'custo_medio')
      .innerJoin('ti.operacoes', 'o')
      .leftJoin('ti.rendimentos', 'r')
      .where('o.usuario_id = :usuarioId', { usuarioId: usuario.id })
      .groupBy('ti.id')
      .getRawMany()

    return titulos as Array<MeusInvestimentosType>
  }

}

export default new TituloRepositorio()