import React, { useState, useEffect } from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

const Chat = () => {
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
            padding: 10, // 왼쪽 말풍선의 padding
            backgroundColor: "#f0f0f0", // 왼쪽 말풍선 배경색
          },
          right: {
            padding: 10, // 오른쪽 말풍선의 padding
            backgroundColor: "#0084ff", // 오른쪽 말풍선 배경색
            alignItems: "flex-end", // 오른쪽 말풍선을 오른쪽에 정렬
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      renderBubble={renderBubble} // 말풍선 스타일을 적용
    />
  );
};

export default Chat;
