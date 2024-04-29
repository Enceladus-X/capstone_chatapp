import React, { useEffect } from "react";
import { View, Button, Pressable } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import Header from "../components/Header";

function LoginPage({ navigation }) {
  useEffect(() => {}, []);

  const gotoHomePage = () => {
    navigation.navigate("HomePage");
  };
  return (
    
    <View style={{ flex: 1,}}>
      <Header 
        text = {"Login Page"}
      />
      <ButtonCustom
        onpress={() => {
          gotoHomePage();
        }}
        title="go to Home Page"
      />
    </View>
  );
}

export default LoginPage;
