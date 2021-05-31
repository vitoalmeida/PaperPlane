import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Auth from '~/pages/Auth'
import Home from '~/pages/Home'
import Search from '~/pages/Search'
import Notification from '~/pages/Notification'
import Message from '~/pages/Message'

const Tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator tabBarOptions={{
    activeTintColor: 'red',
    inactiveTintColor: 'blue',
    labelStyle: { fontSize: 30 }
  }} initialRouteName="Home">
    <Tab.Screen name="Home"component={Home}/>
    <Tab.Screen name="Search"component={Search}/>
    <Tab.Screen name="Notification"component={Notification}/>
    <Tab.Screen name="Message"component={Message}/>
  </Tab.Navigator>
)
