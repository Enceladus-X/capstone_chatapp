import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import Header from "../components/header";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SettingPage } from "./SettingPage"

function HomePage({ navigation }) {
  useEffect(() => {}, []);

  const gotoChatPage = () => {
    navigation.navigate("ChatPage");
  };

  const gotoSettingPage = () => {
    navigation.navigate("SettingPage");
  };

  const Drawer = createDrawerNavigator();

  const HomeDrawer = () => {
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="SettingPage" component={SettingPage} />
      </Drawer.Navigator>
    </NavigationContainer>;
  };

  return (
    <View style={{ flex: 1 }}>

      <ButtonCustom
        onpress={() => {
          gotoChatPage();
        }}
        title="go to Chat Page"
      />
      <ButtonCustom
        onpress={() => {
          gotoSettingPage();
        }}
        title="go to Setting Page"
      />
      <HomeDrawer />
    </View>
  );
}

export default HomePage;
