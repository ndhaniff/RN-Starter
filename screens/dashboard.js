import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import s from '../src/styles/main'

export default class Dashboard extends React.Component {
  state = {

  }

  render() {
    const { navigation } = this.props

    return (
      <View style={s.container}>
        <Button icon="add-a-photo" mode="contained" onPress={() => navigation.navigate('Home')}>
          Home
        </Button>
      </View>
    )
  }
}
