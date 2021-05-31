import React, { Component } from 'react'
import {
  View,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';

import avatar from '~/assets/images/avatar200px.png'

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={avatar} style={styles.image} />
        </View>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 50,
    backgroundColor: "#A1E4FD",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#8dddfe',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    paddingLeft: 555,
    height: 80,
    width: '100%',
    resizeMode: 'contain'
  }
})

export default Header
