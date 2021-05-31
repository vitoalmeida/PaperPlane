import React from 'react'
import { StyleSheet, FlatList, View, StatusBar } from 'react-native'
import Header from '~/components/Header'
import Post from '~/components/Post'

export default props => {
  state = {
    posts: [{
      id: Math.random()
    },
    { id: Math.random() },
    { id: Math.random() },
    { id: Math.random() },
    { id: Math.random() },
    { id: Math.random() },
    { id: Math.random() },
    { id: Math.random() },
    {
      id: Math.random()
    }]

  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#A1E4FD' />
      <Header />
      <FlatList
        data={this.state.posts}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) =>
          <Post key={item.id} {...item} />} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e9eef1'
  }
})
