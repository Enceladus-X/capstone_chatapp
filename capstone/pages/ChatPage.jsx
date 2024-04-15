import React from "react";
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

const APP_ID = "AD3842D8-FC26-42B4-BA66-54098A1BA28D";
const USER_ID = "xogh7319";

function Chatpage() {
  return (
    <div className="App"
    style={{
      height: '100%',
      width: '100%',
    }}>
      <SendbirdApp
        appId={APP_ID} 
        userId={USER_ID} 
      />
    </div>
  );
}
export default Chatpage;
