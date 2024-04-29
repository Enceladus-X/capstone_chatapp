import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  StatusBar,
  Text,
  Button,
  KeyboardAvoidingView,
  Center,
  VStack,
  Heading,
  Input,
  useToast,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";

function AppBar_Home({ navigation }) {
  const gotoSettingPage = () => {
    navigation.navigate("Setting");
  };

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop />
      <HStack
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Text color="white" fontSize="20" fontWeight="bold"></Text>
        <IconButton
          icon={
            <Icon
              size={"md"}
              as={MaterialIcons}
              name="settings"
              color={"black"}
            />
          }
          onPress={gotoSettingPage}
        />
      </HStack>
    </>
  );
}

function HomePage({ navigation }) {
  useEffect(() => {}, []);

  const [nickname, setNickname] = useState("");
  const toast = useToast();

  const gotoChatPage = () => {
    if (nickname === "") {
      toast.show({
        title: "Please enter your nickname!",
        status: "warning", // 여기 수정
        color: "red",
      });
    } else {
      navigation.navigate("Chat");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AppBar_Home navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignContent: "center",
          justifyContent: "center",
          padding: 16,
        }}
      >
        <KeyboardAvoidingView
          h={{
            base: "400px",
            lg: "auto",
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Center>
            <VStack
              flex="1"
              justifyContent="flex-end"
              w="100%"
              maxW="800"
              padding={2}
            >
              <Heading mb="3">Welcome to MATE!</Heading>
              <Text color="muted.400">
                MATE is a nickname-based chat app! Enter your nickname and start
                chatting right away. Everyone is waiting to meet you!
              </Text>
              <View
                style={{
                  padding: 16,
                }}
              >
                <Input
                  placeholder="Enter your nickname"
                  mt="10"
                  mb="4"
                  value={nickname}
                  onChangeText={(text) => setNickname(text)}
                />
                <Button mb="4" onPress={gotoChatPage}>
                  Go To Chat!
                </Button>
              </View>
            </VStack>
          </Center>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

export default HomePage;
