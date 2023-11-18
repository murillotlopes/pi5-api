import axios, { AxiosInstance } from "axios";

// const apiBrapi = axios.create({
//   baseURL: 'https://brapi.dev/api'
// })

// export default apiBrapi

class ApiBrapi {
  private api: AxiosInstance
  private token: { token: string }

  constructor() {
    this.token = { token: process.env.TOKEN_BRAPI }
    this.api = axios.create({
      baseURL: 'https://brapi.dev/api'
    })
  }

  public async buscarTicket(ticket: string) {
    return (await this.api.get(`/quote/${ticket}`, { params: { ...this.token } })).data.results[0]
  }

  public async listarTicket(ticket?: string) {
    return (await this.api.get(`/quote/list`, {
      params: {
        ...this.token,
        search: ticket
        // ${ticket ? `?search=${ticket}` : ''}
      }
    })).data.stocks[0]
  }
}

export default new ApiBrapi()