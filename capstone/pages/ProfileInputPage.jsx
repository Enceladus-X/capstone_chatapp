import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

function ProfileInputPage({ navigation }) {
  const [nickName, setNickName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')

  const gotoHomePage = () => {
    navigation.navigate('HomePage')
  }

  return (
    <View style={styles.container}>
      <Text>환영합니다!!</Text>
      <View style={styles.form}>
        <Text>프로필 입력</Text>
        <Text>닉네임 입력</Text>
        <TextInput
          style={styles.input}
          value={nickName}
          onChangeText={(text) => setNickName(text)}
          placeholder="닉네임을 입력하세요"
        />
        <Text>성별 입력</Text>
        <Picker
          selectedValue={gender}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="성별을 선택하세요" value="" />
          <Picker.Item label="남자" value="male" />
          <Picker.Item label="여자" value="female" />
        </Picker>
        <Text>나이 입력</Text>
        <Picker
          selectedValue={age}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setAge(itemValue)}
        >
          <Picker.Item label="나이를 선택하세요" value="" />
          {[...Array(101).keys()].map((num) => (
            <Picker.Item label={String(num)} value={String(num)} key={num} />
          ))}
        </Picker>

        <Button title="Continue" onPress={gotoHomePage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
})

export default ProfileInputPage
