// React Imports
import React, { useState } from 'react';
import { KeyboardAvoidingView, TextInput, Button, View, Text, ImageBackground, StyleSheet, StatusBar } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/navigator'
import Sucess from './Sucesso'
import Falha from './Falha'
// Images Imports
import backgroundImage from '~/assets/images/LoginPuro.jpg'

// Firebase Auth Imports
import '@react-native-firebase/auth'
import firebase from '../../firebaseconection'

function Login({ navigation }) {
  function navegarSucess() {
    navigation.navigate('Home')
  }
  function navegarFalha() {
    navigation.navigate('Falha')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail)
  }

  const onChangePassword = (txtPassword) => {
    setPassword(txtPassword)
  }

  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      navegarSucess()
    }).catch(() => {
      navegarFalha()
    })
  }
  return (
    <ImageBackground source={backgroundImage}
      style={styles.background}>
      <StatusBar barStyle='light-content' backgroundColor='#A1E4FD' />
      <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Email</Text>
        <TextInput
          value={email}
          onChangeText={txtEmail => onChangeEmail(txtEmail)}>
        </TextInput>
        <Text>Senha</Text>
        <TextInput
          value={password}
          onChangeText={txtPassword => onChangePassword(txtPassword)}>
        </TextInput>

        <Button
          title="Entrar"
          onPress={login}
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const Stack = createStackNavigator();
function LoginForm() {
  return (
      <Stack.Navigator
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sucesso" component={Sucess} />
        <Stack.Screen name="Falha" component={Falha} />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})

export default LoginForm
