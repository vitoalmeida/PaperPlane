import React from 'react'
import { View, Text, StyleSheet, } from 'react-native';

export default props => {
  return(
    <View style={StyleSheet.container}>
      <Text options={{ email: props.email, secure: true}}
      style={styles.avatar} />
      <Text Style ={styles.nickname}>{props.nickname}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  avatar: {
    width:30,
    heigth: 30,
    borderRadius: 15,
    marginHorizontal: 10
  },
  nickname: {
    color: '#444',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
})
