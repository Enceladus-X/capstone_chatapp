import React from "react";
import { Pressable } from "react-native";

const Button_Custom = ({ onpress, text }) => {
  return (
    <Pressable
      onpress={onpress}
      style={{
        padding: 14,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        borderColor: line ? line : color,
        backgroundColor: pressed ? color : "#ffffff",
      }}
    >
      <Text>{text}</Text>
    </Pressable>
  );
};
