// React Imports
import React, { useState } from 'react';
import { KeyboardAvoidingView, TextInput, Button, View, Text, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/navigator'
import Sucess from './Sucesso'
import Falha from './Falha'
// Images Imports
import backgroundImage from '~/assets/images/loginbckg.jpg'

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
      <StatusBar barStyle='light-content' backgroundColor='white' />
      <KeyboardAvoidingView style={styles.inputContainer}>
        {/* <Image source={require('~/assets/images/registerAvatar.png')} style={styles.image}/> */}
        <TextInput style={styles.input}
          placeholder="Digite seu email"
          autoCorrect={false}
          value={email}
          onChangeText={txtEmail => onChangeEmail(txtEmail)}>
        </TextInput>
        <TextInput style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          autoCorrect={false}
          value={password}
          onChangeText={txtPassword => onChangePassword(txtPassword)}>
        </TextInput>

        <TouchableOpacity style={styles.loginBtn}
          title="Entrar"
          onPress={login}>
          <Text>ENTRAR</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const Stack = createStackNavigator();
function LoginForm() {
  return (
    <Stack.Navigator style={styles.header}
      screenOptions={{ headerShown: true, headerTitle: '', headerTransparent: true }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sucesso" component={Sucess} />
      <Stack.Screen name="Falha" component={Falha} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  background: {
    color: '#91DEFC',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    resizeMode: 'cover'
  },
  inputContainer: {
    flex: 1,
    marginTop: 480,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 25,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
    width: '90%',
    padding: 10
  },
  loginBtn: {
    backgroundColor: '#FFF',
    width: '60%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderRadius: 20,
    marginTop: 10
  }
})

export default LoginForm
