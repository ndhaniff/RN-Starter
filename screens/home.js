import React from 'react'
import {
  Text, View, StyleSheet, ImageBackground, Image
} from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import axios from 'axios'


const logo = require('../src/images/logo.gif')

class Home extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  requestApi = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    alert(JSON.stringify(data))
  }

  render() {
    const { email, password } = this.state

    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Formik
            initialValue={{ email: '', password: '' }}
            onSubmit={values => alert(JSON.stringify(values))}
          >
            {formikProps => (
              <React.Fragment>
                <View style={{ alignItems: 'center' }}>
                  <Image style={{ width: 100, height: 100 }} source={logo} />
                </View>
                <View style={styles.formGroup}>
                  <TextInput
                    style={styles.input}
                    label="Email"
                    value={email}
                    onChangeText={formikProps.handleChange}
                  />
                </View>
                <View style={styles.formGroup}>
                  <TextInput
                    style={styles.input}
                    label="Password"
                    value={password}
                    secureTextEntry
                    onChangeText={formikProps.handleChange}
                  />
                </View>
                <Button
                  style={{ marginTop: 20 }}
                  mode="contained"
                  color="#353333"
                  onPress={formikProps.handleSubmit}
                >
                Sign In
                </Button>
                <Button
                  style={{ marginTop: 20 }}
                  mode="contained"
                  color="#353333"
                  onPress={this.requestApi}
                >
                Fetch
                </Button>
              </React.Fragment>
            )}
          </Formik>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 30,
    justifyContent: 'center'
  },
  container: {
    backgroundColor: '#fff',
    padding: 20
  },
  input: {
    backgroundColor: 'transparent'
  },
  formGroup: {
    marginBottom: 5
  }
})

export default Home
