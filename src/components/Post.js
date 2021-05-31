import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import icon from '~/assets/images/postavatar.png'

class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.post}>
          <Image source={icon} style={styles.postIcon}/>
          <Text style={styles.postText}>Vaga aberta!</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    alignItems: 'center',
  },
  post: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    height: 150,
    borderRadius: 30,
    // height: Dimensions.get('window') * 3 / 4,
  },
  postIcon: {
    height: 85,
    width: 85,
    resizeMode: 'contain'
  },
  postText: {
    padding: 20,
    fontFamily: 'Bahnschrift',
    fontSize: 20
  }
})

export default Post
