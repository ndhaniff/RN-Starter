
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaView } from 'react-native'
import Home from './screens/home'
import Dashboard from './screens/dashboard'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#353333',
    accent: '#f1c40f',
  }
}

const AppNavigator = createStackNavigator({
  Home,
  Dashboard
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <AppContainer />
        </SafeAreaView>
      </PaperProvider>
    )
  }
}
