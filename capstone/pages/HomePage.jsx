import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import Header from "../components/header";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SettingPage } from "./SettingPage";
import AppbarCustom from "../components/AppbarCustom";
import { Box, List } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function HomePage({ navigation }) {
  useEffect(() => {}, []);


  const gotoChatPage = () => {
    navigation.navigate("ChatPage");
  };

  const gotoSettingPage = () => {
    navigation.navigate("SettingPage");
  };



  return (
    <View style={{ flex: 1 }}>
      <AppbarCustom title="Welcome" onPress={() => gotoSettingPage()} />

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
    </View>
  );
}

export default HomePage;
