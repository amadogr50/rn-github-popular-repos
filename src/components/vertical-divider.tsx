import React from 'react'
import { StyleSheet, View } from 'react-native'

import Colors from '../theme/colors'

const VerticalDivider = (): JSX.Element => {
  return <View style={styles.divider} />
}

const styles = StyleSheet.create({
  divider: {
    height: 2,
    backgroundColor: Colors.divider,
  },
})

export default VerticalDivider
