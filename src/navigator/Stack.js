import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Auth from '~/pages/Auth'
import Home from '~/pages/Home'
import PassoStack from '~/components/PassoStack'
import Tab from './Tab'

const Stack = createStackNavigator()

export default props => (
  <Stack.Navigator initialRouteName="Auth"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Auth"
      options={{ title: 'Autenticação' }}>
      {props => (
        <PassoStack {...props}avancar="Home">
          <Auth />
        </PassoStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
)
