import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '~/pages/Home'
import Search from '~/pages/Search'
import Notification from '~/pages/Notification'
import Message from '~/pages/Message'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
FontAwesome.loadFont();

const Tab = createBottomTabNavigator();

export default props =>{
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'bell' : 'bell';
            } else if (route.name === 'Message') {
              iconName = focused ? 'envelope' : 'envelope';
            }


            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#8dddfe',
          inactiveTintColor: 'gray',
          showLabel: false
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Message" component={Message} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
