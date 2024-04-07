import React, { useEffect } from "react";
import { View, Button } from "react-native";
import button_custom from "../components/button_custom";

function LoadingPage({ navigation }) {
  useEffect(() => {
    const gotoLoginpage = () => {
      navigation.navigate("LoginPage");
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <button_custom
        text="go to LoginPage"
        onpress={() => {
          navigation.navigate("LoginPage");
        }}
      />
    </View>
  );
}

export default LoadingPage;
