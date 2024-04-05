import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import pages
import LoginPage from "../pages/LoginPage";
import LoadingPage from "../pages/LoadingPage";
import ProfileInputPage from "../pages/ProfileInputPage";
import SettingPage from "../pages/SettingPage";
import HomePage from "../pages/HomePage";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ProfileInputPage" component={ProfileInputPage} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
