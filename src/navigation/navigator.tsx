import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import TrendingScreen from '../screens/trending-screen'
import Colors from '../theme/colors'
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
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.text,
        inactiveTintColor: Colors.notification,
      }}
    >
      <Tabs.Screen
        name={Routes.Trending}
        component={TrendingStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

const Navigator = (): JSX.Element => {
  return (
    <NavigationContainer theme={{ dark: false, colors: Colors }}>
      <TabsNavigator />
    </NavigationContainer>
  )
}

export default Navigator
