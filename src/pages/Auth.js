// React Imports
import React, { useState, useEffect } from 'react';
import { Animated, View, Text, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register'
import Login from './Login'

// Images Imports
import backgroundImage from '~/assets/images/LoginPuro.jpg'

// Principal Component
function AuthScreen({ navigation }) {
  const [welcomeOpacity] = useState(new Animated.Value(0))
  const [inputMove] = useState(new Animated.ValueXY({ x: 0, y: 200 }))

  useEffect(() => {
    Animated.parallel([
      Animated.timing(welcomeOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true
      }),
      Animated.spring(inputMove.y, {
        toValue: 0,
        speed: 2,
        bounciness: 5,
        useNativeDriver: true
      })


    ]).start()
  }, [])

  return (
    <ImageBackground source={backgroundImage}
      style={styles.background}>
      <StatusBar barStyle='light-content' backgroundColor='#A1E4FD' />
      <Animated.View style={[styles.welcome, {
        opacity: welcomeOpacity
      }]}>
        <Text style={[styles.welcomeText, {fontSize: 24}]}>BEM VINDO AO</Text>
        <Text style={[styles.welcomeText, {fontSize: 34}]}>PAPER PLANE</Text>
      </Animated.View>
      <Animated.View style={[styles.containerInput, {
        transform: [
          { translateY: inputMove.y }
        ]
      }]}>

        <TouchableOpacity style={styles.registerBtn}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>COMEÇAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>ENTRAR</Text>
        </TouchableOpacity>

      </Animated.View>
    </ImageBackground>
  );
}

// Navigation Component
const Stack = createStackNavigator();
export default props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Styles
const styles = StyleSheet.create({
  background: {
    color: '#91DEFC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    resizeMode: 'cover'
  },
  containerInput: {
    // backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    width: '90%'
  },
  registerBtn: {
    backgroundColor: '#FFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 10
  },
  registerText: {
    fontWeight: 'bold',
    color: '#139091',
    fontSize: 18
  },
  loginBtn: {
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 20,
    marginTop: 10
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
  },
  welcome: {
    // backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 420,
    paddingBottom: 0,
    flex: 1,
  },
  welcomeText: {
    fontFamily: 'AppleTea',
    color: 'white',
  }
})
