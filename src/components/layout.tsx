import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'

import Colors from '../theme/colors'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={
          Platform.OS === 'ios' ? Colors.primary : Colors.primaryDark
        }
      />
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default Layout
