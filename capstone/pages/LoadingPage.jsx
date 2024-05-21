import React from "react"
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"

// LoadingPage 컴포넌트는 앱의 로딩 화면을 담당하며, 로고 이미지를 통해 홈 페이지로 이동할 수 있음.
function LoadingPage({ navigation }) {
  // 홈 페이지로 직접 이동하는 함수
  const gotoHomePage = () => navigation.navigate("Home")

  return (
    <View style={styles.container}>
 
      <TouchableOpacity onPress={gotoHomePage}>
        <Image
          source={require("../assets/images/logoText.png")} // 이미지 파일 경로
          style={styles.image} // 이미지 스타일 적용
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // View를 화면 전체에 표시
    justifyContent: "center", // 자식 요소를 수직 중앙에 배치
    alignItems: "center", // 자식 요소를 수평 중앙에 배치
  },
  image: {
    width: 200, // 이미지의 너비
    height: 200, // 이미지의 높이
    resizeMode: "contain", // 이미지의 비율을 유지하며 컨테이너에 맞게 조정
    marginBottom: 20, // 이미지 아래에 여백 추가
  },
})

export default LoadingPage
