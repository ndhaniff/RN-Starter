import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import s from '../src/styles/main'

class Home extends Component {
  state = {

  }

  render() {
    return (
      <View style={s.container}>
        <Button icon="add-a-photo" mode="contained" onPress={() => this.props.navigation.navigate('Dashboard')}>
          Home
        </Button>
      </View>
    )
  }
}

export default Home
