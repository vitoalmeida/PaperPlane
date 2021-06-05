// React Imports
import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Animated,
  TextInput,
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Keyboard
} from 'react-native';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/navigator'
import Sucess from './Sucesso'
// Images Imports
import backgroundImage from '~/assets/images/registerbckg.jpg'
import closeBtn from '~/assets/images/close.png'

// Firebase Auth Imports
import '@react-native-firebase/auth'
import firebase from '../../firebaseconection'

// Principal Component
function RegisterScreen({ navigation }) {
  function navegar() {
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

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }))
  const [opacity] = useState(new Animated.Value(0))
  const [imageOpacity] = useState(new Animated.Value(1))
  const [imageMove] = useState(new Animated.ValueXY({ x: 0, y: 0 }))

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true
      }),
    ]).start()
  }, [])

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(imageOpacity, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true
      }),
      Animated.spring(imageMove.y, {
        toValue: -100,
        speed: 4,
        useNativeDriver: true
      }),
    ]).start()
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.spring(imageMove.y, {
        toValue: 0,
        speed: 4,
        useNativeDriver: true
      })
    ]).start()
  }

  return (
    <ImageBackground source={backgroundImage}
    style={styles.backgroundImg}>
      <StatusBar barStyle='light-content' backgroundColor='white' />
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.imageContainer}>
          <Animated.Image source={require('~/assets/images/registerAvatar.png')}
            style={[styles.image,
            {
              opacity: imageOpacity,
              transform: [
                { translateY: imageMove.y }
              ]
            }
            ]}
          />
        </View>
        <Animated.View
          style={[styles.inputContainer,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
          ]}
        >

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

          <TouchableOpacity style={styles.registerBtn}
            onPress={Cadastration}>
            <Text>CADASTRAR</Text>
          </TouchableOpacity>

        </Animated.View>

      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

// Navigation Component
const Stack = createStackNavigator();
function CadastrationForm() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, headerTitle: '', headerTransparent: true }}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sucesso" component={Sucess} />
    </Stack.Navigator>
  );
}

export default CadastrationForm

// Styles
const styles = StyleSheet.create({
  backgroundImg: {
    color: '#91DEFC',
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    // backgroundColor: 'red',
    flex: 1.5,
    paddingBottom: 70,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  inputContainer: {
    // backgroundColor: 'blue',
    flex: 1,
    marginTop: 0,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 25,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '100%',
    padding: 10
  },
  registerBtn: {
    backgroundColor: '#FFF',
    width: '60%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderRadius: 20,
    marginTop: 10
  }
})
