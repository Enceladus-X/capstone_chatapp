import React, { useEffect, useState, useRef } from "react";
import { Text, ScrollView } from "react-native";
import {
  Box,
  VStack,
  HStack,
  Switch,
  Select,
  SelectItem,
  CheckIcon,
  AlertDialog,
  Button,
  Heading,
  Divider,
  Toast,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// 스타일 통합 관리 객체
const styles = {
  boxStyle: { // 박스 스타일 정의
    bg: "coolGray.100",
    p: "4",
    rounded: "md",
    shadow: 2
  },
  textStyle: { // 텍스트 스타일 정의
    fontSize: "md",
    color: "coolGray.800"
  },
  selectStyle: { // 선택 입력 필드 스타일 정의
    width: "70%",
    accessibilityLabel: "Choose Language",
    placeholder: "Choose Language",
    _selectedItem: {
      bg: "teal.600",
      endIcon: <CheckIcon size="5" />,
    },
    mt: 1,
  }
};

function SettingPage() {
  const navigation = useNavigation(); 
  const [settings, setSettings] = useState({
    alarm: false,
    vibration: false,
    darkMode: false,
    language: "en",
    termsOpen: false
  });
  const cancelRef = useRef(null);

  useEffect(() => {
    // 설정값 로드
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const jsonValue = await AsyncStorage.getItem('settings');
    if (jsonValue != null) setSettings(JSON.parse(jsonValue));
  };

  const handleBack = () => navigation.goBack();

  const handleSave = async () => {
    try {
      const jsonValue = JSON.stringify(settings);
      await AsyncStorage.setItem('settings', jsonValue);
      Toast.show({
        description: "Settings saved.",
        duration: 1000,
        placement: "top"
      });
    } catch (e) {
      Toast.show({
        description: "Failed to save settings.",
        duration: 1000,
        placement: "top"
      });
    }
  };

  // 설정 항목 컨테이너 컴포넌트
  const SettingItemsContainer = ({ children }) => (
    <Box {...styles.boxStyle}>{children}</Box>
  );

  // 스위치 버튼을 포함하는 설정 항목 컴포넌트
  const SettingSwitchItem = ({ title, setting }) => (
    <HStack space={2} justifyContent="space-between" alignItems="center">
      <Text {...styles.textStyle}>{title}</Text>
      <Switch isChecked={settings[setting]} onToggle={() => setSettings({ ...settings, [setting]: !settings[setting] })} />
    </HStack>
  );

  // 언어 선택을 위한 설정 항목 컴포넌트
  const Setting_Language = () => (
    <HStack space={3} justifyContent="space-between" alignItems="center">
      <Text {...styles.textStyle}>Language</Text>
      <Select
        selectedValue={settings.language}
        onValueChange={(value) => setSettings({ ...settings, language: value })}
        {...styles.selectStyle}
      >
        <Select.Item label="English" value="en" />
        <Select.Item label="Korean" value="ko" />
      </Select>
    </HStack>
  );

  // 이용 약관 대화상자 컴포넌트
  const TermsDialog = () => (
    <>
      <HStack space={3} justifyContent="space-between" alignItems="center">
        <Text {...styles.textStyle}>Terms & Conditions</Text>
        <Button variant="outline" onPress={() => setSettings({ ...settings, termsOpen: true })}>Show Terms</Button>
      </HStack>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={settings.termsOpen} onClose={() => setSettings({ ...settings, termsOpen: false })}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Terms & Conditions</AlertDialog.Header>
          <AlertDialog.Body>이용 약관입니다</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button ref={cancelRef} onPress={() => setSettings({ ...settings, termsOpen: false })}>Close</Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );

  // 설정 페이지의 주요 내용을 구성하는 컴포넌트
  const SettingContents = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack space={2.5} mt="4" px="8">
        <Heading size="md">Settings</Heading>
      </VStack>
      <VStack space={4} mt={5} px={5}>
        <SettingItemsContainer>
          <SettingSwitchItem title="Alarm" setting="alarm" />
          <Divider my="2" />
          <SettingSwitchItem title="Vibration" setting="vibration" />
          <Divider my="2" />
          <SettingSwitchItem title="Dark Mode" setting="darkMode" />
        </SettingItemsContainer>
        <SettingItemsContainer>
          <Setting_Language />
        </SettingItemsContainer>
        <SettingItemsContainer>
          <TermsDialog />
        </SettingItemsContainer>
        <HStack space={3} px="5" py="5" justifyContent="flex-end">
          <Button variant="ghost" onPress={handleBack}>Back</Button>
          <Button onPress={handleSave}>Save</Button>
        </HStack>
      </VStack>
    </ScrollView>
  );

  return <SettingContents />;
}

export default SettingPage;