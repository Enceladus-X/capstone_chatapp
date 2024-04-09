import React, { useEffect } from "react";
import { View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";
import Header from "../components/header";

function ProfileInputPage({ navigation }) {
  useEffect(() => {}, []);

  const gotoHomePage = () => {
    navigation.navigate("HomePage");
  };
  return (
    <View style={{ flex: 1 }}>
      <Header text={"Profile Input Page"} />
      <ButtonCustom
        onpress={() => {
          gotoHomePage();
        }}
        title="go to Home Page"
      />
    </View>
  );
}

export default ProfileInputPage;
