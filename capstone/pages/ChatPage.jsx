
import React, { useEffect } from "react";
import { View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import Header from "../components/header";

function SettingPage({ navigation }) {
  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <Header text={"Setting Page"} />
     
    </View>
  );
}

export default SettingPage;


