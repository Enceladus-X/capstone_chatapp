import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import page components
import LoadingPage from "../pages/LoadingPage";
import SettingPage from "../pages/SettingPage";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";

const Stack = createNativeStackNavigator();

// Define default screen options
const defaultScreenOptions = {
  headerStyle: {
    height: 45,
  },
  headerShown: false, // No header for all screens by default
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        {/* Screen configurations */}
        <Stack.Screen name="Loading" component={LoadingPage} />
        <Stack.Screen name="Setting" component={SettingPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Chat" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
