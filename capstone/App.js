import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import pages
import  LoginPage  from "./pages/LoginPage";
import  LoadingPage  from "./pages/LoadingPage";

const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
