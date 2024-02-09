import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { Index } from './src/screens/Index'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/> 
    </NavigationContainer>
  )
}

export default App
