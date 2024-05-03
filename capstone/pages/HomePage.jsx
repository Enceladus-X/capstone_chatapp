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
import React, { useState } from "react";
import { Platform, View, StyleSheet } from "react-native";

function AppBar_Home({ navigation }) {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop />
      <HStack style={styles.header}>
        <Text color="white" fontSize="20" fontWeight="bold"></Text>
        <IconButton
          icon={<Icon size="md" as={MaterialIcons} name="settings" color="black" />}
          onPress={() => navigation.navigate("Setting")}
        />
      </HStack>
    </>
  );
}

function HomePage({ navigation }) {
  const [nickname, setNickname] = useState("");
  const toast = useToast();

  const gotoChatPage = () => {
    if (!nickname) {
      toast.show({
        title: "Please enter your nickname!",
        status: "warning",
        color: "red",
      });
    } else {
      navigation.navigate("Chat");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AppBar_Home navigation={navigation} />
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <Center>
            <VStack space="3" style={styles.innerContainer}>
              <Heading mb="3">Welcome to MAET!</Heading>
              <Text color="muted.400">
                MAET is a nickname-based chat app! Enter your nickname and start chatting right away. Everyone is waiting to meet you!
              </Text>
              <Input
                placeholder="Enter your nickname"
                mt="10"
                mb="4"
                value={nickname}
                onChangeText={setNickname}
              />
              <Button mb="4" onPress={gotoChatPage}>
                Go To Chat!
              </Button>
            </VStack>
          </Center>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    px: 1,
    py: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
    w: '100%'
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  keyboardView: {
    base: '400px',
    lg: 'auto',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    w: '100%',
    maxW: '800',
    padding: 2,
  }
});

export default HomePage;
