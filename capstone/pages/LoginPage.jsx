import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

function LoginPage({ navigation }) {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // 여기에 로그인 처리 로직을 추가하세요.
    // 로그인 성공 시 HomePage.jsx로 이동하는 코드를 작성하세요.
    navigation.navigate('ProfileInputPage')
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>ID</Text>
        <TextInput
          style={styles.input}
          value={id}
          onChangeText={(text) => setId(text)}
          placeholder="ID를 입력하세요"
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="비밀번호를 입력하세요"
          secureTextEntry={true}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'tomato',
  },
  form: {
    width: '80%',
    // backgroundColor: 'orange',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    // backgroundColor: 'teal',
  },
})

export default LoginPage
