import axios, { AxiosInstance } from "axios";

class ApiKnn {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: 'http://127.0.0.1:5000/api/knn'
    })
  }

  public async analise(payload: {}) {
    return await this.api.post('/analise', payload)
  }

}

export default new ApiKnn