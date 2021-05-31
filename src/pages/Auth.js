import React, { Component, useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  LogBox,
  TextComponent,
  StatusBar,
  Alert
} from 'react-native';

import PassoStack from '../components/PassoStack'
import backgroundImage from '~/assets/images/LoginPuro.jpg'
import Tab from '~/navigator/Tab';

export default class Auth extends Component {
  state = {
    name: '',
    email: '',
    password: '',
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

  render() {
    return (
      <ImageBackground source={backgroundImage}
        style={styles.background}>

        <KeyboardAvoidingView style={styles.containerInput}>
          {/* Tela inicial */}
          {this.state.stageInit &&
            <TouchableOpacity
              onPress={() => this.setState({ stageRegister: true, stageLogin: true, stageInit: false })}
              style={styles.btnRegisterInit}>
              <Text style={styles.registerTextInit}>
                COMEÇAR
                        </Text>
            </TouchableOpacity>
          }

          {this.state.stageInit &&
            <TouchableOpacity
              onPress={() => this.setState({ stageLogin: true, stageInit: false })}
              style={styles.btnSubmitInit}>
              <Text style={styles.submitText}>
                ENTRAR
                        </Text>
            </TouchableOpacity>
          }

          {this.state.stageRegister &&
            <TextInput style={styles.inputNome}
              placeholder="Nome"
              autoCorrect={false}
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />}

          {this.state.stageRegister, this.state.stageLogin &&
            <TextInput style={styles.input}
              placeholder="Email"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />}

          {this.state.stageRegister, this.state.stageLogin &&
            <TextInput style={styles.input}
              secureTextEntry={true}
              placeholder="Senha"
              autoCorrect={false}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />}


          {this.state.stageRegister &&
            <TextInput style={styles.input}
              secureTextEntry={true}
              placeholder="Confirmar Senha"
              autoCorrect={false}
              value={this.state.confirmPassword}
              onChangeText={confirmPassword => this.setState({ confirmPassword })}
            />}

          {this.state.stageRegister, this.state.stageLogin &&
            <TouchableOpacity
              onPress={this.signinOrSignup}
              style={styles.btnSubmit}>
              <Text style={styles.registerText}>
                {this.state.stageRegister ? 'Cadastrar' : 'Entrar'}
              </Text>
            </TouchableOpacity>
          }

          {this.state.stageRegister, this.state.stageLogin &&
            <TouchableOpacity
              onPress={() => this.setState({ stageLogin: true })}
              onPress={() => this.setState({ stageRegister: !this.state.stageRegister })}
              style={styles.btnRegister}>
              <Text style={styles.registerText}>
                {this.state.stageRegister ? 'Já possui conta?' : 'Não possui conta?'}
              </Text>
            </TouchableOpacity>
          }

        </KeyboardAvoidingView>

      </ImageBackground>
    )
  }

}

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
    marginTop: 300,
    width: '90%'
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  inputNome: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmitInit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
  submitTextInit: {
    color: '#FFF',
    fontSize: 18
  },
  btnRegisterInit: {
    backgroundColor: '#FFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10
  },
  btnRegister: {
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',

  },
  registerText: {
    color: '#FFF'
  },
  registerTextInit: {
    color: '#139091',
    fontSize: 18
  }
})
