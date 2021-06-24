import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../theme/colors'
import Dimensions from '../theme/dimensions'
import { Repository } from '../types'
import CacheImage from './cache-image'
import Typography from './typography'

type RepositoryItemProps = {
  style?: StyleProp<ViewStyle>
  repository: Repository
}

const RepositoryItem = ({
  style,
  repository,
}: RepositoryItemProps): JSX.Element => {
  return (
    <View style={[styles.root, style]}>
      <Typography.H5 style={styles.headline}>{repository.name}</Typography.H5>
      <Typography.P style={styles.description}>
        {repository.description}
      </Typography.P>
      <View style={styles.details}>
        <View style={styles.ownerInfo}>
          <CacheImage
            style={styles.avatar}
            source={repository.owner.avatar_url}
          />
          <Typography.P>{repository.owner.login}</Typography.P>
        </View>
        <View style={styles.stargazersContainer}>
          <Icon name="star" color={Colors.onBackground} size={Dimensions.l} />
          <Typography.P style={styles.stargazersCount}>
            {repository.stargazers_count.toString()}
          </Typography.P>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: Dimensions.m,
  },
  headline: {
    marginBottom: Dimensions.m,
  },
  description: {
    marginBottom: Dimensions.m,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ownerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: Dimensions.l,
    height: Dimensions.l,
    marginRight: Dimensions.s,
  },
  stargazersContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  stargazersCount: {
    fontWeight: 'bold',
  },
})

export default RepositoryItem
