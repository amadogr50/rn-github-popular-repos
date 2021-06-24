import React, { useCallback, useMemo } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { QueryFunctionContext, useInfiniteQuery } from 'react-query'

import GithubApi from '../apis/github-api'
import Layout from '../components/layout'
import RepositoryItem from '../components/repository-item'
import VerticalDivider from '../components/vertical-divider'
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
    ({ item }) => <RepositoryItem style={styles.item} repository={item} />,
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
    <Layout>
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
          ItemSeparatorComponent={VerticalDivider}
        />
      )}
    </Layout>
  )
}

const styles = StyleSheet.create({
  item: {},
})

export default TrendingScreen
