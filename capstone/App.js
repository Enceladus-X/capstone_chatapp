// App.js

import React from "react";
import AppNavigator from "./Routes/Router";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { AppProvider } from "./AppContext"; // AppProvider import 추가

export default function App() {
  return (
    <NativeBaseProvider>
      <AppProvider> {/* AppProvider로 감싸기 */}
        <AppNavigator />
      </AppProvider>
    </NativeBaseProvider>
  );
}
