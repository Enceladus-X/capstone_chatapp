import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Import pages
import LoginPage from '../pages/LoginPage'
// import LoadingPage from "../pages/LoadingPage";
import ProfileInputPage from '../pages/ProfileInputPage'
import SettingPage from '../pages/SettingPage'
import ChatPage from '../pages/ChatPage'
import HomePage from '../pages/HomePage'

import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="LoadingPage" component={LoadingPage} /> */}
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ProfileInputPage" component={ProfileInputPage} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
