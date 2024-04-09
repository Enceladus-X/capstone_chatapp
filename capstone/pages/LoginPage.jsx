import React, { useEffect } from "react";
import { View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import Header from "../components/header";

function LoginPage({ navigation }) {
  useEffect(() => {}, []);

  const gotoProfileInputPage = () => {
    navigation.navigate("ProfileInputPage");
  };
  return (
    <View style={{ flex: 1 }}>
      <Header text={"Login Page"} />
      <ButtonCustom
        onpress={() => {
          gotoProfileInputPage();
        }}
        title="go to Profile Input Page"
      />
    </View>
  );
}

export default LoginPage;
