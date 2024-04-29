import {
  Container,
  Flex,
  Heading,
  ScrollView,
  VStack,
  HStack,
  Switch,
  Select,
  SelectItem,
  CheckIcon,
  AlertDialog,
  Button,
  Box,
  Divider,
  Toast,
} from "native-base";
import React, { useEffect, useState, useRef } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function SettingPage() {
  useEffect(() => {}, []);

  const navigation = useNavigation(); 

  const handleBack = () => {
    navigation.goBack(); 
  };

  const handleSave = () => {
    Toast.show({
      description: "Settings saved.",
      duration: 1000,
      placement: "top"
    });

  };

  

 

  const SettingItemsContainer = ({ children }) => {
    return (
      <Box bg="coolGray.100" p="4" rounded="md" shadow={2}>
        {children}
      </Box>
    );
  };

  const SettingSwitchItem = ({ title, isEnabled, toggleSwitch }) => {
    return (
      <HStack space={2} justifyContent="space-between" alignItems="center">
        <Text fontSize="md" color="coolGray.800">
          {title}
        </Text>
        <Switch isChecked={isEnabled} onToggle={toggleSwitch} />
      </HStack>
    );
  };

  const Setting_Language = ({ label, selectedLanguage, onChange }) => {
    return (
      <HStack space={3} justifyContent="space-between" alignItems="center">
        <Text fontSize="md" color="coolGray.800">
          {label}
        </Text>
        <Select
          selectedValue={selectedLanguage}
          width="70%"
          accessibilityLabel="Choose Language"
          placeholder="Choose Language"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => onChange(itemValue)}
        >
          <Select.Item label="English" value="en" />
          <Select.Item label="Korean" value="ko" />
        </Select>
      </HStack>
    );
  };

  const TermsDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef(null);

    return (
      <>
        <HStack space={3} justifyContent="space-between" alignItems="center">
          <Text fontSize="md" color="coolGray.800">
            Terms & Conditions
          </Text>
          <Button variant="outline" onPress={() => setIsOpen(true)}>
            Show Terms
          </Button>
        </HStack>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Terms & Conditions</AlertDialog.Header>
            <AlertDialog.Body>
              이용 약관입니다
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button ref={cancelRef} onPress={onClose}>
                Close
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </>
    );
  };

  const SettingContents = () => {
    const [isAlarmEnabled, setAlarmEnabled] = useState(false);
    const [isVibrationEnabled, setVibrationEnabled] = useState(false);
    const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
    const [language, setLanguage] = useState("en");

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={2.5} mt="4" px="8">
          <Heading size="md">Settings</Heading>
        </VStack>

        <VStack space={4} mt={5} px={5}>
          <SettingItemsContainer>
            <SettingSwitchItem
              title="Alarm"
              isEnabled={isAlarmEnabled}
              toggleSwitch={() => setAlarmEnabled(!isAlarmEnabled)}
            />
            <Divider my="2" />
            <SettingSwitchItem
              title="Vibration"
              isEnabled={isVibrationEnabled}
              toggleSwitch={() => setVibrationEnabled(!isVibrationEnabled)}
            />
            <Divider my="2" />
            <SettingSwitchItem
              title="Dark Mode"
              isEnabled={isDarkModeEnabled}
              toggleSwitch={() => setDarkModeEnabled(!isDarkModeEnabled)}
            />
          </SettingItemsContainer>
          <SettingItemsContainer>
            <Setting_Language
              label="Language"
              selectedLanguage={language}
              onChange={setLanguage}
            />
          </SettingItemsContainer>
          <SettingItemsContainer>
            <TermsDialog />
          </SettingItemsContainer>

          <HStack space={3} px="5" py="5" justifyContent="flex-end">
            <Button variant="ghost" onPress={handleBack}>
              Back
            </Button>
            <Button onPress={handleSave}>Save</Button>
          </HStack>
        </VStack>
      </ScrollView>
    );
  };

  return <SettingContents />;
}

export default SettingPage;
