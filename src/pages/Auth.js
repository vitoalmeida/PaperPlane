// React Imports
import React, { useState } from 'react';
import { KeyboardAvoidingView, TextInput, Button, View, Text, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register'
import Login from './Login'

// Images Imports
import backgroundImage from '~/assets/images/LoginPuro.jpg'
import { withTheme } from 'styled-components';

// Principal Component
function AuthScreen ({ navigation }) {
  return (
    <ImageBackground source={backgroundImage}
      style={styles.background}>
      <StatusBar barStyle='light-content' backgroundColor='#A1E4FD' />
      <KeyboardAvoidingView style={styles.containerInput}>

        <TouchableOpacity style={styles.registerBtn}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>COMEÇAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>ENTRAR</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  containerInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 450,
    width: '90%'
  },
  registerBtn: {
    backgroundColor: '#FFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
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
    borderRadius: 7,
    marginTop: 10
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18
  }
})
