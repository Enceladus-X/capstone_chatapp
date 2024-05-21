import React from "react"
import AppNavigator from "./Routes/Router"
import { NativeBaseProvider } from "native-base"
import { AppProvider } from "./AppContext" // AppProvider import 추가

export default function App() {
  return (
    <NativeBaseProvider>
      <AppProvider> 
        <AppNavigator />
      </AppProvider>
    </NativeBaseProvider>
  )
}
