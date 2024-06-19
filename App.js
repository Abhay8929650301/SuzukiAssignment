import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ParentScreen from './screen/ParentScreen'
import DetailPage from './screen/DetailPage'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='ParentScreen' component={ParentScreen} />
        <Stack.Screen name='DetailPage' component={DetailPage} />

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App