import axios, { AxiosInstance } from "axios";

// const apiBrapi = axios.create({
//   baseURL: 'https://brapi.dev/api'
// })

// export default apiBrapi

class ApiBrapi {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: 'https://brapi.dev/api'
    })
  }

  public async buscarTicket(ticket: string) {
    return (await this.api.get(`/quote/${ticket}`)).data.results[0]
  }

  public async listarTicket(ticket?: string) {
    return (await this.api.get(`/quote/list${ticket ? `?search=${ticket}` : ''}`)).data.stocks[0]
  }
}

export default new ApiBrapi()