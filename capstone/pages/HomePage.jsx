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

// 상단 앱 바 컴포넌트
function AppBar_Home({ navigation }) {
  // 상태바 및 설정 버튼을 포함한 헤더 표시
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" /> // 상태바 설정
      <Box safeAreaTop /> // 안전 영역 상단 공간 확보
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

// 홈 페이지 컴포넌트
function HomePage({ navigation }) {
  const [nickname, setNickname] = useState(""); // 닉네임 상태 관리
  const toast = useToast(); // 토스트 메시지 기능 활용

  // 채팅 페이지로 이동 처리 함수
  const gotoChatPage = () => {
    if (!nickname) {
      toast.show({ // 닉네임 입력 안할 경우 경고 토스트 출력
        title: "Please enter your nickname!",
        status: "warning",
        color: "red",
      });
    } else {
      navigation.navigate("Chat"); // 닉네임이 입력된 경우 채팅 페이지로 이동
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AppBar_Home navigation={navigation} />
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"} // 플랫폼에 따른 키보드 회피 동작 설정
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
                onChangeText={setNickname} // 입력된 텍스트를 닉네임 상태로 설정
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

// 스타일 정의를 위한 StyleSheet 객체
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
