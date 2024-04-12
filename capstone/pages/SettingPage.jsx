import React from "react";
import { Text, View } from "react-native";
import Divider from "@mui/material/Divider";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
  TextField,
} from "@mui/material";

function App() {
  const SettingHeader = () => {
    return (
      <Text
        style={{
          color: "#aa93f3",
          fontSize: "24px",
          fontFamily: "Poppins",
          fontWeight: 600,
          lineHeight: "32px",
          padding: "16px",
        }}
      >
        Settings
      </Text>
    );
  };

  const DividedHeader = (contents) => {
    return (
      <Text
        style={{
          color: "#030303",
          fontSize: "14px",
          fontFamily: "Poppins",
          fontWeight: 600,
          lineHeight: "18px",
          padding: "16px",
        }}
      >
        {contents}
      </Text>
    );
  };
  const PersonalInfoHeader = () => {
    return (
      <Text
        style={{
          color: "#030303",
          fontSize: "14px",
          fontFamily: "Poppins",
          fontWeight: 600,
          lineHeight: "18px",
          padding: "16px",
        }}
      >
        Personal Info
      </Text>
    );
  };

  const ChangeNicknameInput = () => {
    return (
      <Grid container spacing={2} alignContent={"center"}>
        <Grid item xs={4}>
          <Text>Nickname</Text>
        </Grid>
        <Grid item xs={8}>
          <TextField
            required
            id="USER_NICKNAME"
            defaultValue="Nickname"
            variant="filled"
            size="small"
            style={{
              width: "90%",
              marginBottom: "16px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          />
        </Grid>
      </Grid>
    );
  };

  const ChangeGenderSelect = () => {
    return (
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={4}>
          <Text>Gender</Text>
        </Grid>
        <Grid item xs={8}>
          <FormControl
            fullWidth
            style={{
              width: "90%",
              marginBottom: "16px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          >
            <InputLabel id="USER_GENDER_LABEL">Gender</InputLabel>
            <Select labelId="USER_GENDER_LABEL" id="USER_GENDER" label="Gender">
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
  };

  const ChangeAgeInput = () => {
    return (
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={4}>
          <Text>Age</Text>
        </Grid>
        <Grid item xs={8}>
          <Slider
            defaultValue={20}
            aria-label="Default"
            valueLabelDisplay="auto"
            color="#aa93f3"
            style={{
              width: "90%",
              marginBottom: "16px",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          />
        </Grid>
      </Grid>
    );
  };

  const NotificationHeader = () => {
    return (
      <Text
        style={{
          color: "#030303",
          fontSize: "14px",
          fontFamily: "Poppins",
          fontWeight: 600,
          lineHeight: "18px",
          padding: "16px",
        }}
      >
        Notifications
      </Text>
    );
  };

  const PushNotification = () => {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <Text>Push Notification</Text>
        </Grid>
        <Grid item xs>
          <Switch
            style={{
              alignItems: "right",
            }}
          />
        </Grid>
      </Grid>
    );
  };

  const ThemeHeader = () => {
    return (
      <Text
        style={{
          color: "#030303",
          fontSize: "14px",
          fontFamily: "Poppins",
          fontWeight: 600,
          lineHeight: "18px",
          padding: "16px",
        }}
      >
        Theme
      </Text>
    );
  };

  const ChangeTheme = () => {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <Text>Dark Theme</Text>
        </Grid>
        <Grid item xs>
          <Switch
            style={{
              alignItems: "right",
            }}
          />
        </Grid>
      </Grid>
    );
  };

  return (
    <View>
      <SettingHeader />
      <Divider />
      <DividedHeader/>
      <ChangeNicknameInput />
      <ChangeGenderSelect />
      <ChangeAgeInput />
      <Divider />
      <NotificationHeader />
      <PushNotification />
      <Divider />
      <ThemeHeader />
      <ChangeTheme />
    </View>
  );
}

export default App;
