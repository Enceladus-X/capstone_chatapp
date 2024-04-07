import React from "react";
import { Pressable , Text} from "react-native";

const button_custom = ({ onpress, text }) => {
  return (
    <Pressable
      onpress={onpress}
      style={{
        padding: 14,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
      }}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};


export default button_custom;