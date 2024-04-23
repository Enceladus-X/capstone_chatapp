import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function LoginPage({ navigation }) {
  const handleGoogleLogin = () => {
    // 구글 로그인 처리 로직을 추가하세요.
    // 로그인 성공 시 HomePage.jsx로 이동하는 코드를 작성하세요.
    navigation.navigate('ProfileInputPage')
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')} // 이미지 파일의 경로를 지정합니다.
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
        <Image
          source={require('../assets/images/googleLogo.png')} // Google 로고 이미지 경로
          style={styles.logo}
        />
        <Text style={styles.text}>구글로 로그인</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lavender',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // 이미지를 화면에 맞게 조정합니다.
    marginBottom: 20, // 이미지와 버튼 사이의 간격 조정
    marginLeft: 28,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    bottom: '15%',
    position: 'absolute',
    width: '60%',
    borderRadius: 4,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
  },
})

export default LoginPage
