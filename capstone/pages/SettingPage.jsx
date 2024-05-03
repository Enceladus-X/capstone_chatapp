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

// 스타일 통합 관리 객체
const styles = {
  boxStyle: {
    bg: "coolGray.100",
    p: "4",
    rounded: "md",
    shadow: 2
  },
  textStyle: {
    fontSize: "md",
    color: "coolGray.800"
  },
  selectStyle: {
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
  const [isAlarmEnabled, setAlarmEnabled] = useState(false);
  const [isVibrationEnabled, setVibrationEnabled] = useState(false);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);

  useEffect(() => {}, []);

  const handleBack = () => navigation.goBack();
  const handleSave = () => Toast.show({
    description: "Settings saved.",
    duration: 1000,
    placement: "top"
  });

  const SettingItemsContainer = ({ children }) => (
    <Box {...styles.boxStyle}>{children}</Box>
  );

  const SettingSwitchItem = ({ title, isEnabled, toggleSwitch }) => (
    <HStack space={2} justifyContent="space-between" alignItems="center">
      <Text {...styles.textStyle}>{title}</Text>
      <Switch isChecked={isEnabled} onToggle={toggleSwitch} />
    </HStack>
  );

  const Setting_Language = () => (
    <HStack space={3} justifyContent="space-between" alignItems="center">
      <Text {...styles.textStyle}>Language</Text>
      <Select
        selectedValue={language}
        onValueChange={setLanguage}
        {...styles.selectStyle}
      >
        <Select.Item label="English" value="en" />
        <Select.Item label="Korean" value="ko" />
      </Select>
    </HStack>
  );

  const TermsDialog = () => (
    <>
      <HStack space={3} justifyContent="space-between" alignItems="center">
        <Text {...styles.textStyle}>Terms & Conditions</Text>
        <Button variant="outline" onPress={() => setIsOpen(true)}>Show Terms</Button>
      </HStack>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Terms & Conditions</AlertDialog.Header>
          <AlertDialog.Body>이용 약관입니다</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button ref={cancelRef} onPress={() => setIsOpen(false)}>Close</Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );

  const SettingContents = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack space={2.5} mt="4" px="8">
        <Heading size="md">Settings</Heading>
      </VStack>
      <VStack space={4} mt={5} px={5}>
        <SettingItemsContainer>
          <SettingSwitchItem title="Alarm" isEnabled={isAlarmEnabled} toggleSwitch={() => setAlarmEnabled(!isAlarmEnabled)} />
          <Divider my="2" />
          <SettingSwitchItem title="Vibration" isEnabled={isVibrationEnabled} toggleSwitch={() => setVibrationEnabled(!isVibrationEnabled)} />
          <Divider my="2" />
          <SettingSwitchItem title="Dark Mode" isEnabled={isDarkModeEnabled} toggleSwitch={() => setDarkModeEnabled(!isDarkModeEnabled)} />
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
