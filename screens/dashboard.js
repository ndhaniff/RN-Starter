import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import s from '../src/styles/main'

export default class Dashboard extends React.Component {
  state = {

  }

  render() {
    return (
      <View style={s.container}>
        <Button icon="add-a-photo" mode="contained" onPress={() => this.props.navigation.navigate('Home')}>
          Dashboard
        </Button>
      </View>
    )
  }
}
