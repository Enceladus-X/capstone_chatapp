import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Import pages

import LoginPage from '../pages/LoginPage';
import LoadingPage from '../pages/LoadingPage';
import HomePage from '../pages/homepage';
import ProfileInputPage from '../pages/ProfileInputPage'
import SettingPage from '../pages/SettingPage';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="LoadingPage" component={LoadingPage} />
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="ProfileInputPage" component={ProfileInputPage} />
                <Stack.Screen name="SettingPage" component={SettingPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};  

export default AppNavigator;
