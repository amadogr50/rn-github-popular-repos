import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useQuery } from 'react-query'

import GithubApi from '../apis/github-api'

const TrendingScreen = (): JSX.Element => {
  const [page, setPage] = useState(0)

  const { isLoading, isError, data } = useQuery(
    ['trending-repositories', page],
    () => GithubApi.getInstance().getTrending(page),
    {
      keepPreviousData: true,
    },
  )

  return (
    <View>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : isError ? (
        <View>
          <Text>Error...</Text>
        </View>
      ) : (
        <View>
          <Text>Data...</Text>
        </View>
      )}
    </View>
  )
}

export default TrendingScreen
