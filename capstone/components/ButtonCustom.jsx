import { Button } from "@rneui/base";
import * as React from "react";

export default ({ onpress, title }) => {
  const style = {
    width: 150,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Button style={style} 

      onPress={onpress}
      title={title}

    />
  );
};
