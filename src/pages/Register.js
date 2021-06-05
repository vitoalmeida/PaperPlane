// React Imports
import React, { useState } from 'react';
import { KeyboardAvoidingView, TextInput, Button, View, Text, ImageBackground, StyleSheet, StatusBar } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/navigator'
import Sucess from './Sucesso'
// Images Imports
import backgroundImage from '~/assets/images/LoginPuro.jpg'

// Firebase Auth Imports
import '@react-native-firebase/auth'
import firebase from '../../firebaseconection'

// Principal Component
function RegisterScreen({ navigation }) {
  function navegar(){
    navigation.navigate('Sucesso')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (txtEmail) => {
    setEmail(txtEmail)
  }

  const onChangePassword = (txtPassword) => {
    setPassword(txtPassword)
  }

  const Cadastration = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      navegar()
    }).catch(() => {

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
          title="Go to Home"
          onPress={Cadastration}
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

// Navigation Component
const Stack = createStackNavigator();
function CadastrationForm(){
  return (
      <Stack.Navigator
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sucesso" component={Sucess} />
      </Stack.Navigator>
  );
}

export default CadastrationForm

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})
