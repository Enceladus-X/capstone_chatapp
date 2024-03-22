import React from "react";
import { View, Image , StyleSheet} from "react-native";

const Loadingpage = () => {
  <View style = {styles}>
    <Text>
      로드중입니다
    </Text>
  </View>;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

});

export default Loadingpage;