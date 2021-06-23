import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import TrendingScreen from '../screens/trending-screen'
import Routes from './routes'

const TrendingStack = createStackNavigator()

const TrendingStackNavigator = (): JSX.Element => {
  return (
    <TrendingStack.Navigator>
      <Tabs.Screen name={Routes.Trending} component={TrendingScreen} />
    </TrendingStack.Navigator>
  )
}

const Tabs = createBottomTabNavigator()

const TabsNavigator = (): JSX.Element => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={Routes.Trending} component={TrendingStackNavigator} />
    </Tabs.Navigator>
  )
}

const Navigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  )
}

export default Navigator
