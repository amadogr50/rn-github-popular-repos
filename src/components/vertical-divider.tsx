import React from 'react'
import { StyleSheet, View } from 'react-native'

const VerticalDivider = (): JSX.Element => {
  return <View style={styles.divider} />
}

const styles = StyleSheet.create({
  divider: {
    height: 2,
    backgroundColor: 'lightgray',
  },
})

export default VerticalDivider
