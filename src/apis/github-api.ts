import { AxiosResponse } from 'axios'

import { SearchResponse } from '../types'
import HttpClient from './http-client'

class GithubApi extends HttpClient {
  private static classInstance?: GithubApi

  private constructor() {
    super('https://api.github.com/')
  }

  static getInstance = (): GithubApi => {
    if (!this.classInstance) {
      this.classInstance = new GithubApi()
    }

    return this.classInstance
  }

  getTrending = (page: number): Promise<AxiosResponse<SearchResponse>> =>
    this.instance.request<SearchResponse>({
      url: 'search/repositories?q=created:>2017-10-22&sort=stars&order=desc',
      params: {
        page,
      },
    })
}

export default GithubApi
