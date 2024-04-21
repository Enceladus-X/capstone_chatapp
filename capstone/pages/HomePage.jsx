import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import ButtonCustom from '../components/ButtonCustom'
import AppbarCustom from '../components/AppbarCustom'


function HomePage({ navigation }) {
  useEffect(() => {}, [])

  const gotoChatPage = () => {
    navigation.navigate('ChatPage')
  }

  const gotoSettingPage = () => {
    navigation.navigate('SettingPage')
  }

  return (
    <View style={{ flex: 1 }}>
      <AppbarCustom title="Welcome" onPress={() => gotoSettingPage()} />

      <ButtonCustom
        onpress={() => {
          gotoChatPage()
        }}
        title="go to Chat Page"
      />
      <ButtonCustom
        onpress={() => {
          gotoSettingPage()
        }}
        title="go to Setting Page"
      />
    </View>
  )
}

export default HomePage
