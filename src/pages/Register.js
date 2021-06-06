// React Imports
import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Animated,
  TextInput,
  Image,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Keyboard,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

// Navigation Imports
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '~/pages/Auth'
import Sucess from './Sucesso'
import Falha from './Falha'

// Images Imports
import backgroundImage from '~/assets/images/registerbckg.jpg'
import registerAvatar from '~/assets/images/registerAvatar.png'

// Firebase Auth Imports
import '@react-native-firebase/auth'
import firebase from '../../firebaseconection'



// Principal Component
function RegisterScreen({ navigation }) {
  function navegar() {
    navigation.goBack()
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
      Alert.alert('','Conta criada com sucesso! Prossiga com o login!')
      navegar()
    }).catch(() => {

    })
  }

  const [inputOpacity] = useState(new Animated.Value(0))
  const [inputMove] = useState(new Animated.ValueXY({ x: 0, y: 100 }))
  const [imageOpacity] = useState(new Animated.Value(1))
  const [imageMove] = useState(new Animated.ValueXY({ x: 0, y: -100 }))
  const [backgroundOpacity] = useState(new Animated.ValueXY({ x: 0, y: 0 }))

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    Animated.parallel([
      Animated.spring(inputMove.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
        useNativeDriver: true
      }),
      Animated.spring(imageMove.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
        useNativeDriver: true
      }),
      Animated.timing(inputOpacity, {
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
        duration: 120,
        useNativeDriver: true
      }),
      Animated.spring(imageMove.y, {
        toValue: -300,
        speed: 10,
        useNativeDriver: true
      }),
      Animated.spring(inputMove.y, {
        toValue: -70,
        bounciness: 12,
        speed: 2,
        useNativeDriver: true
      }),
      Animated.spring(backgroundOpacity, {
        toValue: -200,
        bounciness: 2,
        speed: 0.5,
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
        bounciness: 2,
        useNativeDriver: true
      }),
      Animated.spring(inputMove.y, {
        toValue: 0,
        speed: 0,
        bounciness: 0,
        useNativeDriver: true
      }),
      Animated.spring(backgroundOpacity, {
        toValue: 0,
        bounciness: 0,
        speed: 4,
        useNativeDriver: true
      }),
    ]).start()
  }

  return (
    <KeyboardAvoidingView enabled={true} style={styles.background}>
      <Animated.View style={{
        ...StyleSheet.absoluteFill,
        transform: [
          { translateY: backgroundOpacity.y }
        ]
      }}>
        <Image source={backgroundImage} style={{ flex: 1, width: null }} />
      </Animated.View>

      <StatusBar barStyle='light-content' backgroundColor='white' />

      <Animated.View style={[styles.imageContainer,
      {
        opacity: imageOpacity,
        transform: [
          { translateY: imageMove.y }
        ]
      }
      ]}>
        <Animated.Image source={registerAvatar}
          style={styles.image}
        />
      </Animated.View>
      <Animated.View
        style={[styles.inputContainer,
        {
          opacity: inputOpacity,
          transform: [
            { translateY: inputMove.y }
          ]
        }
        ]}
      >

        <View style={styles.inputBox}>
          <Icon name='envelope' size={20} style={[styles.inputIcon, { paddingLeft: 16, paddingRight: 12 }]} />
          <TextInput style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            value={email}
            onChangeText={txtEmail => onChangeEmail(txtEmail)}>
          </TextInput>
        </View>

        <View style={styles.inputBox}>
          <Icon name='lock' size={20} style={styles.inputIcon} />
          <TextInput style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            keyboardType= 'default'
            value={password}
            // secureTextEntry={true}
            onChangeText={txtPassword => onChangePassword(txtPassword)}>
          </TextInput>
        </View>

        <TouchableOpacity style={styles.registerBtn}
          onPress={Cadastration}>
          <Text style={{ fontFamily: 'AppleTea', fontSize: 18, alignItems: 'center', color: '#444' }}>
            CADASTRAR
            </Text>
        </TouchableOpacity>

      </Animated.View>

    </KeyboardAvoidingView>

  );
}

// Navigation Component
const Stack = createStackNavigator();
function CadastrationForm() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, headerTitle: '', headerTransparent: true }}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Sucesso" component={Sucess} />
    </Stack.Navigator>
  );
}

export default CadastrationForm

// Styles
const styles = StyleSheet.create({
  backgroundImg: {
    width: '100%',
    height: '100%'
  },
  background: {
    backgroundColor: '#59C9FA',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    // backgroundColor: 'red',
    flex: 1.5,
    paddingBottom: 100,
    justifyContent: 'center',
  },
  image: {
    // flex: 1,
    resizeMode: 'contain',
    width: 400
  },
  inputContainer: {
    //  backgroundColor: 'blue',
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    color: '#999',
    paddingLeft: 20,
    paddingRight: 15,
    borderRightWidth: 2,
    borderColor: '#DDD'
  },
  input: {
    // backgroundColor: 'red',
    fontFamily: 'MomcakeBold',
    padding: 10,
    paddingLeft: 15,
    color: '#999',
    fontSize: 20,
    width: '85%'
  },
  inputBox: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 25,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '100%',
    height: 50,
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
    marginTop: 10,
    shadowRadius: 5,
    shadowOffset: { width: 15, height: 15 },
    shadowColor: 'black',
    shadowOpacity: 1
  }
})
