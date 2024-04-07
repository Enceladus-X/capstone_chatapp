import React, { useEffect } from "react";
import { View, Button, Pressable } from "react-native";

function LoginPage({ navigation }) {
  useEffect(() => {
    const gotoHomePage = () => {
      navigation.navigate("HomePage");
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        onPress={() => {
          navigation.navigate("LoginPage");
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "blue",
            padding: 10,
            borderRadius: 5,
          },
        ]}
      >
      </Pressable>
    </View>
  );
}

export default LoginPage;
