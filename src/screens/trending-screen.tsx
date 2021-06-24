import React, { useCallback, useMemo } from 'react'
import { FlatList, Text, View } from 'react-native'
import { QueryFunctionContext, useInfiniteQuery } from 'react-query'

import GithubApi from '../apis/github-api'
import { Repository, SearchResponse } from '../types'

const TrendingScreen = (): JSX.Element => {
  const getTrending = useCallback(
    ({ pageParam = 0 }: QueryFunctionContext<'trending-repositories'>) =>
      GithubApi.getInstance().getTrending(pageParam),
    [],
  )

  const { isLoading, isError, data, fetchNextPage } = useInfiniteQuery(
    'trending-repositories',
    getTrending,
    {
      getNextPageParam: (lastPage) => lastPage.incomplete_result,
      keepPreviousData: true,
    },
  )

  const renderItem = useCallback(
    () => (
      <View>
        <Text>Hola</Text>
      </View>
    ),
    [],
  )

  const onEndReached = useCallback(() => {
    fetchNextPage()
  }, [fetchNextPage])

  const realData: Repository[] = useMemo(() => {
    return data
      ? data.pages.reduce(
          (repositories: Repository[], currentPage: SearchResponse) => {
            return [...repositories, ...currentPage.items]
          },
          [],
        )
      : []
  }, [data])

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
        <FlatList
          data={realData}
          renderItem={renderItem}
          onEndReached={onEndReached}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}

export default TrendingScreen
