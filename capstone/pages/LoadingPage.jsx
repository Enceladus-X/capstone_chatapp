import React, { useEffect } from 'react'
import { View } from 'react-native'
import ButtonCustom from '../components/ButtonCustom'
import Header from '../components/header'

function LoadingPage({ navigation }) {
  useEffect(() => {}, [])

  const gotoLoginpage = () => {
    navigation.navigate('LoginPage')
  }

  return (
    <View>
      <ButtonCustom
        onpress={() => {
          gotoLoginpage()
        }}
        title="go to LoginPage"
      />
    </View>
  )
}

export default LoadingPage
