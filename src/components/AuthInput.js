import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
  return (
    <View style={[styles.inputContainer, props.style]}>
      <Icon name={props.icon} size={20} style={styles.icon}/>]
      <TextInput {...props} style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    //  backgroundColor: 'blue',
    flex: 1,
    marginTop: 0,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  icon: {
    color: '#333',
    marginLeft: 30
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 15,
    color: '#ADADAD',
    fontSize: 17,
    paddingLeft: 40,
    borderRadius: 25,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: '100%',
    padding: 10
  }
})
