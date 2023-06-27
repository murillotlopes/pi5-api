import { TituloInvestimento } from "../../entities/TituloInvestimento"
import apiBrapi from "../../providers/apiBrapi"
import tituloRepositorio from "./titulo.repositorio"

class TituloService {

  public async buscar(ticket: string) {
    const ticketDB = await tituloRepositorio.buscar(ticket)

    if (ticketDB.length === 0) {
      const novoTitulo = new TituloInvestimento()
      const consulta = await apiBrapi.buscarTicket(ticket)
      const consulta2 = await apiBrapi.listarTicket(ticket)

      if (consulta) {
        novoTitulo.nome_empresa = consulta?.longName ? consulta.longName : ''
        novoTitulo.ticket = consulta?.symbol ? consulta.symbol : ''
        novoTitulo.segmento = consulta2?.sector ? consulta2.sector : ''
        novoTitulo.tipo = ''

        return await tituloRepositorio.salvar(novoTitulo)
      }
    }
    return ticketDB
  }
}

export default new TituloService()