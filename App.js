import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer , DefaultTheme} from '@react-navigation/native'
import Router from './src/Router'
import {Provider} from 'react-redux'
import Store from './src/Redux/'
const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 255 , 255)',
      background : 'rgb(255, 255 , 255)'
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
     <Provider store={Store}>
        <Router />
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
