import { MaterialIcons } from "@expo/vector-icons"
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
} from "native-base"
import React, { useState } from "react"
import { Platform, View, StyleSheet } from "react-native"
import { useAppContext } from "../AppContext"

// 상단 앱 바 컴포넌트
function AppBar_Home({ navigation }) {
  const { darkMode } = useAppContext() // 다크 모드 상태 가져오기

  // 상태바 및 설정 버튼을 포함한 헤더 표시
  return (
    <>
      <StatusBar bg={darkMode ? "#333" : "#f5f5f5"} barStyle="light-content" />
      <Box safeAreaTop />
      <HStack
        style={[
          styles.header,
          { backgroundColor: darkMode ? "#333" : "#f5f5f5" },
        ]}
      >
        <Text color="white" fontSize="20" fontWeight="bold">
          {" "}
        </Text>
        <IconButton
          icon={
            <Icon
              size="md"
              as={MaterialIcons}
              name="settings"
              color={darkMode ? "white" : "black"}
            />
          }
          onPress={() => navigation.navigate("Setting")}
        />
      </HStack>
    </>
  )
}

// 홈 페이지 컴포넌트
function HomePage({ navigation }) {
  const [nickname, setNickname] = useState("") // 닉네임 상태 관리
  const toast = useToast() // 토스트 메시지 기능 활용
  const { darkMode } = useAppContext() // darkMode 상태 가져오기

  // 채팅 페이지로 이동 처리 함수
  const gotoChatPage = () => {
    if (!nickname) {
      toast.show({
        // 닉네임 입력 안할 경우 경고 토스트 출력
        title: "Please enter your nickname!",
        status: "warning",
        color: "red",
      })
    } else {
      navigation.navigate("Chat") // 닉네임이 입력된 경우 채팅 페이지로 이동
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? "#333" : "#f5f5f5" }}>
      <AppBar_Home navigation={navigation} />
      <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Center>
            <VStack space="3">
              <Heading mb="3" color={darkMode ? "white" : "black"}>
                <Text>Welcome to MAET!</Text>
              </Heading>
              <Text color={darkMode ? "lightgray" : "gray"}>
                MAET is a nickname-based chat app! Enter your nickname and start
                chatting right away. Everyone is waiting to meet you!
              </Text>
              <Input
                placeholder="Enter your nickname"
                mt="10"
                mb="4"
                value={nickname}
                onChangeText={setNickname}
                placeholderTextColor={darkMode ? "lightgray" : "gray"}
                color={darkMode ? "white" : "black"}
              />
              <Button
                mb="4"
                onPress={gotoChatPage}
                backgroundColor={darkMode ? "#555" : "#0084ff"}
              >
                <Text color="white">Go To Chat!</Text>
              </Button>
            </VStack>
          </Center>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}

// 스타일 정의를 위한 StyleSheet 객체
const styles = StyleSheet.create({
  header: {
    px: 1,
    py: 3,
    justifyContent: "space-between",
    alignItems: "center",
    w: "100%",
    borderBottomWidth: 0, // 외곽선 제거
  },
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 16,
  },
  keyboardView: {
    base: "400px",
    lg: "auto",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    w: "100%",
    maxW: "800",
    padding: 2,
  },
})

export default HomePage
