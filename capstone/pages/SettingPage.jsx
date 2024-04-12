import React from "react";
import { Text, View } from "react-native";
import Divider from "@mui/material/Divider";
import LoadingPage from "./LoadingPage";
import HomePage from "./HomePage";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
  TextField,
  Stack,
} from "@mui/material";

function App({ navigation }) {
  const styles = {
    headerText: {
      color: "#aa93f3",
      fontSize: 24,
      fontFamily: "Poppins",
      fontWeight: 600,
      lineHeight: 32,
      padding: 16,
    },
    sectionText: {
      color: "#030303",
      fontSize: 16,
      fontFamily: "Poppins",
      fontWeight: 600,
      lineHeight: 18,
      padding: 16,
    },
    subitemText: {
      color: "#030303",
      fontSize: 16,
      fontFamily: "Poppins",
      lineHeight: 18,
      padding: 8,
      marginLeft: 4,
      alignItems: "center",
      justifyContent: "center",
    },
    sectionContainer: {
      width: "90%",
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
    },
  };

  const SettingHeader = () => {
    return <Text style={styles.headerText}>Settings</Text>;
  };

  const DividedHeader = ({ contents = "" }) => {
    return <Text style={styles.sectionText}>{contents}</Text>;
  };

  const ChangeNicknameInput = () => {
    return (
      <Grid container spacing={2} alignContent={"center"}>
        <Grid item xs={4} alignContent={"center"} alignItems={"center"}>
          <Text style={styles.subitemText}>Nickname</Text>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="USER_NICKNAME"
            label="Nickname"
            size="small"
            style={styles.sectionContainer}
          />
        </Grid>
      </Grid>
    );
  };

  const ChangeGenderSelect = () => {
    return (
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={4}>
          <Text style={styles.subitemText}>Gender</Text>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth style={styles.sectionContainer}>
            <InputLabel id="USER_GENDER_LABEL">Gender</InputLabel>
            <Select
              labelId="USER_GENDER_LABEL"
              id="USER_GENDER"
              label="Gender"
              size="small"
            >
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
          <Text style={styles.subitemText}>Age</Text>
        </Grid>
        <Grid item xs={8}>
          <Slider
            defaultValue={20}
            aria-label="Default"
            valueLabelDisplay="auto"
            color="#aa93f3"
            style={styles.sectionContainer}
          />
        </Grid>
      </Grid>
    );
  };

  const PushNotification = () => {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <Text style={styles.subitemText}>Push Notification</Text>
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

  const ChangeTheme = () => {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <Text style={styles.subitemText}>Dark Theme</Text>
        </Grid>
        <Grid item xs>
          <Switch />
        </Grid>
      </Grid>
    );
  };

  const SaveBackStack = () => {
    const gotoLoadingPage = () => {
      navigation.navigate(LoadingPage);
    };

    const gotoHomePage = () => {
      navigation.navigate(HomePage);
    };

    return (
      <Stack direction="row" spacing={2}>
        <Button onClick={() => gotoHomePage()} variant="contained">
          Save
        </Button>

        <Button
          onClick={() => {
            gotoLoadingPage();
          }}
          variant="contained"
        >
          Back
        </Button>
      </Stack>
    );
  };

  return (
    <View>
      <SettingHeader />
      <Divider />
      <DividedHeader contents="Personal Info" />
      <ChangeNicknameInput />
      <ChangeGenderSelect />
      <ChangeAgeInput />
      <Divider />
      <DividedHeader contents="Notifications" />
      <PushNotification />
      <Divider />
      <DividedHeader contents="Theme" />
      <ChangeTheme />
      <SaveBackStack />
    </View>
  );
}

export default App;
