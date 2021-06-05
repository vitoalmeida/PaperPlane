// React Imports
import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet, StatusBar } from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/navigator'

// Images Imports
import backgroundImage from '~/assets/images/LoginPuro.jpg'

// Firebase Auth Imports
import '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app'

// Principal Component
function AuthScreen({ navigation }) {
  state = {
    name: '',
    email: '',
    password: '',
    isAuthenticated: false,
    confirmPassword: '',
    stageRegister: false,
    stageLogin: false,
    stageInit: true,
  }

  signinOrSignup = () => {
    if (this.state.stageRegister) {
      Alert.alert('Sucesso!', 'Conta criada com sucesso!')
    } else {
      Alert.alert('Sucesso!', 'Login realizado com sucesso!')
    }
  }

  return (
    <ImageBackground source={backgroundImage}
      style={styles.background}>
      <StatusBar barStyle='light-content' backgroundColor='#A1E4FD' />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
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
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})
