import { AxiosResponse } from 'axios'
import dayjs from 'dayjs'
import reactotron from 'reactotron-react-native'

import { ErrorResponse, SearchResponse } from '../types'
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

  getTrending = ({
    todayDate,
    page,
  }: {
    todayDate: dayjs.Dayjs
    page: number
  }): Promise<SearchResponse> => {
    const oneMonthBefore = todayDate.subtract(30, 'day').format('YYYY-MM-DD')

    return this.instance
      .get<SearchResponse>(
        `search/repositories?q=created:>${oneMonthBefore}&sort=stars&order=desc`,
        {
          params: {
            page,
          },
        },
      )
      .then((response: AxiosResponse) => response.data)
      .catch((error: { message: string }) => {
        return Promise.reject(error)
      })
  }
}

export default GithubApi
