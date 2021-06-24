import dayjs from 'dayjs'
import React, { useCallback, useMemo } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import SimpleToast from 'react-native-simple-toast'
import { useInfiniteQuery } from 'react-query'

import GithubApi from '../apis/github-api'
import Layout from '../components/layout'
import RepositoryItem from '../components/repository-item'
import VerticalDivider from '../components/vertical-divider'
import Colors from '../theme/colors'
import Dimensions from '../theme/dimensions'
import { Repository, SearchResponse } from '../types'

const TrendingScreen = (): JSX.Element => {
  const { isFetching, data, fetchNextPage } = useInfiniteQuery(
    [`trending-repositories`, dayjs().format('YYYY-MM-DD')],
    ({ pageParam = 1 }) => {
      return GithubApi.getInstance().getTrending({
        todayDate: dayjs(),
        page: pageParam,
      })
    },
    {
      onError: (err: { message: string }) => {
        SimpleToast.show(err.message)
      },
      getNextPageParam: (lastPage, allPages) => {
        return !lastPage.incomplete_result ? allPages.length + 2 : undefined
      },
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

  const keyExtractor = useCallback((item: Repository) => {
    return `${item.id}-${item.node_id}`
  }, [])

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
      <FlatList
        data={realData}
        renderItem={renderItem}
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={VerticalDivider}
        keyExtractor={keyExtractor}
      />
      {isFetching && (
        <View style={styles.loadingIndicatorContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      )}
    </Layout>
  )
}

const styles = StyleSheet.create({
  loadingIndicatorContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: Dimensions.m,
  },
  item: {},
})

export default TrendingScreen
