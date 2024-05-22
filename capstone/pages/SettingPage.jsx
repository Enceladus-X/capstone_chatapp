import React, { useEffect, useState, useRef } from "react";
import { ScrollView, Text as RNText } from "react-native";
import {
  Box,
  VStack,
  HStack,
  Switch,
  Select,
  CheckIcon,
  AlertDialog,
  Button,
  Heading,
  Divider,
  useToast,
  Text,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppContext } from "../AppContext"; // AppContext 훅 사용
import termsAndConditions from "../assets/terms"; // 이용 약관 import

function SettingPage() {
  const navigation = useNavigation();
  const { darkMode, toggleDarkMode } = useAppContext(); // darkMode 상태와 토글 함수 가져오기
  const [settings, setSettings] = useState({
    alarm: false,
    vibration: false,
    darkMode: false,
    language: "en",
    termsOpen: false,
  });
  const cancelRef = useRef(null);
  const toast = useToast();

  useEffect(() => {
    // 설정값 로드
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const jsonValue = await AsyncStorage.getItem("settings");
    if (jsonValue != null) setSettings(JSON.parse(jsonValue));
  };

  const handleBack = () => navigation.goBack();

  const handleSave = async () => {
    try {
      const jsonValue = JSON.stringify(settings);
      await AsyncStorage.setItem("settings", jsonValue);
      toast.show({
        render: () => (
          <Box
            bg={darkMode ? "#333" : "#fff"}
            px="2"
            py="1"
            rounded="sm"
            mb={5}
          >
            <Text color={darkMode ? "#fff" : "#000"}>Settings saved.</Text>
          </Box>
        ),
        duration: 1000,
        placement: "top",
      });
    } catch (e) {
      toast.show({
        render: () => (
          <Box
            bg={darkMode ? "#333" : "#fff"}
            px="2"
            py="1"
            rounded="sm"
            mb={5}
          >
            <Text color={darkMode ? "#fff" : "#000"}>Failed to save settings.</Text>
          </Box>
        ),
        duration: 1000,
        placement: "top",
      });
    }
  };
  

  const styles = {
    scrollViewStyle: {
      backgroundColor: darkMode ? "#333" : "#f5f5f5", // ScrollView 배경색
    },
    textStyle: {
      color: darkMode ? "#fff" : "#2b2b2b", // 글자색
    },
    boxStyle: {
      bg: darkMode ? "#444" : "coolGray.100", // 박스 배경색
      p: "4",
      rounded: "md",
      shadow: 2,
      borderColor: darkMode ? "#666" : "coolGray.300", // 테두리 색
      borderWidth: 1,
    },
    buttonStyle: {
      bg: darkMode ? "#666" : "#0084ff",
      _text: {
        color: darkMode ? "#fff" : "#fff", // 버튼 텍스트 색상 조정
      },
    },
    switchStyle: {
      onTrackColor: darkMode ? "#bbb" : "#81b0ff",
      onThumbColor: darkMode ? "#444" : "#0084ff",
      _hover: {
        onTrackColor: darkMode ? "#bbb" : "#81b0ff",
        onThumbColor: darkMode ? "#444" : "#0084ff",
      },
    },
    dialogStyle: {
      bg: darkMode ? "#444" : "#fff",
      _text: {
        color: darkMode ? "#fff" : "#000",
      },
    },
    selectStyle: {
      base: {
        bg: darkMode ? "#444" : "#fff",
        color: darkMode ? "#fff" : "#000",
      },
      item: {
        bg: darkMode ? "#555" : "#fff",
        _text: {
          color: darkMode ? "#fff" : "#000",
        },
        _hover: {
          bg: darkMode ? "#666" : "#f0f0f0",
        },
      },
    },
  };

  // 설정 항목 컨테이너 컴포넌트
  const SettingItemsContainer = ({ children }) => (
    <Box {...styles.boxStyle}>{children}</Box>
  );

  // 스위치 버튼을 포함하는 설정 항목 컴포넌트
  const SettingSwitchItem = ({ title, setting, onToggle }) => (
    <HStack space={2} justifyContent="space-between" alignItems="center">
      <Text style={styles.textStyle}>{title}</Text>
      <Switch
        isChecked={setting === "darkMode" ? darkMode : settings[setting]}
        onToggle={onToggle}
        onTrackColor={styles.switchStyle.onTrackColor}
        onThumbColor={styles.switchStyle.onThumbColor}
        _hover={styles.switchStyle._hover}
      />
    </HStack>
  );

  // 언어 선택을 위한 설정 항목 컴포넌트
  const Setting_Language = () => (
    <HStack space={3} justifyContent="space-between" alignItems="center">
      <Text style={styles.textStyle}>Language</Text>
      <Select
        selectedValue={settings.language}
        onValueChange={(value) => setSettings({ ...settings, language: value })}
        _selectedItem={{
          ...styles.selectStyle.item,
          endIcon: <CheckIcon size="5" color={darkMode ? "#fff" : "#000"} />,
        }}
        style={styles.selectStyle.base}
      >
        <Select.Item
          label="English"
          value="en"
          _text={styles.selectStyle.item._text}
        />
        <Select.Item
          label="Korean"
          value="ko"
          _text={styles.selectStyle.item._text}
        />
      </Select>
    </HStack>
  );

  // 이용 약관 대화상자 컴포넌트
  const TermsDialog = () => (
    <>
      <HStack space={3} justifyContent="space-between" alignItems="center">
        <Text style={styles.textStyle}>Terms & Conditions</Text>
        <Button
          variant="outline"
          onPress={() => setSettings({ ...settings, termsOpen: true })}
          {...styles.buttonStyle}
        >
          <Text style={styles.buttonStyle._text}>Show Terms</Text>
        </Button>
      </HStack>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={settings.termsOpen}
        onClose={() => setSettings({ ...settings, termsOpen: false })}
      >
        <AlertDialog.Content {...styles.dialogStyle}>
          <AlertDialog.CloseButton />
          <AlertDialog.Header {...styles.dialogStyle}>
            <Text style={styles.dialogStyle._text}>Terms & Conditions</Text>
          </AlertDialog.Header>
          <AlertDialog.Body {...styles.dialogStyle}>
            <RNText style={styles.dialogStyle._text}>
              {settings.language === "en"
                ? termsAndConditions.english
                : termsAndConditions.korean}
            </RNText>
          </AlertDialog.Body>
          <AlertDialog.Footer {...styles.dialogStyle}>
            <Button
              ref={cancelRef}
              onPress={() => setSettings({ ...settings, termsOpen: false })}
              {...styles.buttonStyle}
            >
              <Text style={styles.buttonStyle._text}>Close</Text>
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );

  // 설정 페이지의 주요 내용을 구성하는 컴포넌트
  const SettingContents = () => (
    <ScrollView
      style={styles.scrollViewStyle}
      showsVerticalScrollIndicator={false}
    >
      <VStack space={2.5} mt="4" px="8">
        <Heading size="md" color={styles.textStyle.color}>
          <Text style={styles.textStyle}>Settings</Text>
        </Heading>
      </VStack>
      <VStack space={4} mt={5} px={5}>
        <Box {...styles.boxStyle}>
          <SettingSwitchItem
            title="Alarm"
            setting="alarm"
            onToggle={() =>
              setSettings({ ...settings, alarm: !settings.alarm })
            }
          />
          <Divider my="2" />
          <SettingSwitchItem
            title="Vibration"
            setting="vibration"
            onToggle={() =>
              setSettings({ ...settings, vibration: !settings.vibration })
            }
          />
          <Divider my="2" />
          <SettingSwitchItem
            title="Dark Mode"
            setting="darkMode"
            onToggle={toggleDarkMode} // Use toggleDarkMode from AppContext
          />
        </Box>
        <Box {...styles.boxStyle}>
          <Setting_Language />
        </Box>
        <Box {...styles.boxStyle}>
          <TermsDialog />
        </Box>
        <HStack space={3} px="5" py="5" justifyContent="flex-end">
          <Button variant="ghost" onPress={handleBack}>
            <Text style={styles.textStyle}>Back</Text>
          </Button>
          <Button onPress={handleSave} {...styles.buttonStyle}>
            <Text style={styles.buttonStyle._text}>Save</Text>
          </Button>
        </HStack>
      </VStack>
    </ScrollView>
  );

  return <SettingContents />;
}

export default SettingPage;
