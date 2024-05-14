import React, { useState, useEffect } from "react";
import { GiftedChat, Bubble, InputToolbar, Composer, Send } from "react-native-gifted-chat";
import { useAppContext } from "../AppContext"; // AppContext 훅 사용
import { View, StyleSheet, Text, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Chat = ({ navigation }) => {
  const { darkMode } = useAppContext(); // 다크 모드 상태 가져오기
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // 초기 채팅 메시지 설정
    setMessages([]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, newMessages)
    );
  };

  // 말풍선 스타일을 조정하는 함수
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            padding: 10,
            backgroundColor: darkMode ? "#555" : "#f0f0f0", // 다크 모드 색상 적용
          },
          right: {
            padding: 10,
            backgroundColor: darkMode ? "#888" : "#0084ff", // 다크 모드 색상 적용
          },
        }}
        textStyle={{
          left: {
            color: darkMode ? "#fff" : "#000", // 다크 모드 텍스트 색상 적용
          },
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  // 입력 도구 모음 스타일을 조정하는 함수
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: darkMode ? "#444" : "#fff", // 다크 모드 색상 적용
          borderTopColor: darkMode ? "#555" : "#e0e0e0",
          borderTopWidth: 1,
        }}
        primaryStyle={{ alignItems: "center" }}
      />
    );
  };

  // 채팅 입력 필드 스타일을 조정하는 함수
  const renderComposer = (props) => {
    return (
      <Composer
        {...props}
        textInputStyle={{
          color: darkMode ? "#fff" : "#000", // 다크 모드 텍스트 색상 적용
          backgroundColor: darkMode ? "#666" : "#fff", // 입력 배경색
          borderWidth: 1,
          borderColor: darkMode ? "#555" : "#e0e0e0",
          borderRadius: 10,
          padding: 10,
        }}
      />
    );
  };

  // Send 버튼 스타일을 조정하는 함수
  const renderSend = (props) => {
    return (
      <Send
        {...props}
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 44,
          width: 44,
          backgroundColor: darkMode ? "#555" : "#0084ff", // 다크 모드 색상 적용
          borderRadius: 22,
          margin: 4,
        }}
      >
        <MaterialIcons name="send" size={24} color="#fff" />
      </Send>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? "#333" : "#fff" }]}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      <SafeAreaView>
        <View style={[styles.header, { backgroundColor: darkMode ? "#444" : "#fff", borderBottomColor: darkMode ? "#555" : "#e0e0e0", borderBottomWidth: 1 }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color={darkMode ? "#fff" : "#000"} />
          </TouchableOpacity>
          <Text style={[styles.headerText, { color: darkMode ? "#fff" : "#000" }]}>Chat</Text>
        </View>
      </SafeAreaView>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        renderBubble={renderBubble} // 말풍선 스타일을 적용
        renderInputToolbar={renderInputToolbar} // 입력 도구 모음 스타일을 적용
        renderComposer={renderComposer} // 채팅 입력 필드 스타일을 적용
        renderSend={renderSend} // Send 버튼 스타일을 적용
        user={{ _id: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1, // 헤더에 외곽선 추가
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Chat;
