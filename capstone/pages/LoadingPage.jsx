import React, { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import ButtonCustom from '../components/ButtonCustom'
// import Header from '../components/AppbarCustom';

function LoadingPage({ navigation }) {
  useEffect(() => {
    // 로그인 화면으로 이동
    // 일정 시간(예: 3초 후)이 지난 후에 자동으로 LoginPage로 이동
    const timer = setTimeout(() => {
      navigation.navigate('LoginPage')
    }, 10000) // 1500ms = 1.5초

    return () => clearTimeout(timer)
  }, [navigation])

  // 로그인 화면이 준비되는 즉시 로그인 화면으로 이동
  //   navigation.navigate('LoginPage')
  // }, [navigation])

  return (
    <View style={styles.container}>
      {/* 이미지 추가 */}
      <Image
        source={require('../assets/images/logo.png')} // 이미지 파일의 경로를 지정합니다.
        style={styles.image}
      />
      {/* 원 돌아가는 애니메이션 추가 */}
      {/*<ActivityIndicator size="large" color="gray" />*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // 이미지를 화면에 맞게 조정합니다.
    marginBottom: 20, // 이미지와 버튼 사이의 간격 조정
    marginLeft: 28,
  },
})

export default LoadingPage
