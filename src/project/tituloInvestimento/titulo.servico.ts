import { TituloInvestimento } from "../../entities/TituloInvestimento"
import { Usuario } from "../../entities/Usuario"
import apiBrapi from "../../providers/apiBrapi"
import apiKnn from "../../providers/apiKnn"
import tituloRepositorio from "./titulo.repositorio"

class TituloService {

  public async buscar(ticket: string) {
    const ticketDB = await tituloRepositorio.buscar(ticket)

    if (!ticketDB) {
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

  public async meusTitulos(usuario: Usuario) {

    const titulos = await tituloRepositorio.meusTitulos(usuario)

    for (const titulo of titulos) {
      try {
        const analise = (await apiKnn.analise({ ticker: titulo.ticket })).data
        titulo.recomendacao = analise.recomendacao
      } catch (error) {
        console.error(error)
      }
    }

    return titulos
  }
}

export default new TituloService()