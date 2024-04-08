import * as React from "react";
import {  Header,  Icon } from "@rneui/base";

export default (text) => {
  return (
    <Header
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: {text},
        style: { color: "#0a0a0a" }
      }}
      centerContainerStyle={{}}
      containerStyle={{ width: "100%" }}
      leftComponent={{ icon: "arrow-left", color: "#0a0a0a" }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      backgroundColor="#aa93f3"

      statusBarProps={{}}
    />
  );
}