import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

// Import pages
import LoginPage from "../pages/LoginPage";
import LoadingPage from "../pages/LoadingPage";
import SettingPage from "../pages/SettingPage";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/Chatpage";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            height: 45,
          },
        }}
      >
        <Stack.Screen
          name="Loading"
          component={LoadingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen
          name="Setting"
          component={SettingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Chat" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
