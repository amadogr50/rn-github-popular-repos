import axios, { AxiosInstance, AxiosResponse } from 'axios'

abstract class HttpClient {
  protected readonly instance: AxiosInstance

  protected constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    })

    this._initializeResponseInterceptor()
  }

  private _initializeResponseInterceptor = () => {}

  private _handleResponse = ({ data }: AxiosResponse) => {
    return data
  }

  protected _handleError = (error: any) => Promise.reject(error)
}

export default HttpClient
