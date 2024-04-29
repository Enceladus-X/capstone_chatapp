import * as React from "react";
import { Button } from "native-base";


export default ({onpress, title}) => {
  return (
    <Button
      buttonStyle={{ width: 150 }}
      containerStyle={{ margin: 5 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F",
      }}
      disabledTitleStyle={{ color: "#00F" }}
      linearGradientProps={null}
      iconContainerStyle={{ background: "#000" }}
      loadingProps={{ animating: true }}
      loadingStyle={{}}
      onPress= {onpress}
      title={title}
      titleProps={{}}
      titleStyle={{ marginHorizontal: 5 }}
    />
  );
};
