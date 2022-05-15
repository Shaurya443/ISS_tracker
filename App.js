import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import HomeScreen from '../screens/Home';
import IssLocationScreen from './screens/IssLocationScreen';
import MeteorScreen from './screens/Meteor';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocationScreen';
const Stack=createStackNavigator()
 function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
<Stack.screen name='Home' component={HomeScreen}/>
<Stack.screen name='IssLocation' component={IssLocationScreen}/>
<Stack.screen name='Meteors' component={MeteorScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App
