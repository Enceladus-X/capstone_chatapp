import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [userData, setUserData] = useState({});

  // 상태 로드 함수
  const loadSettings = async () => {
    try {
      const storedDarkMode = await AsyncStorage.getItem('darkMode');
      const storedLanguage = await AsyncStorage.getItem('language');
      const storedUserData = await AsyncStorage.getItem('userData');
      
      if (storedDarkMode !== null) setDarkMode(JSON.parse(storedDarkMode));
      if (storedLanguage !== null) setLanguage(storedLanguage);
      if (storedUserData !== null) setUserData(JSON.parse(storedUserData));
    } catch (error) {
      console.error("Failed to load settings", error);
    }
  };

  // 상태 저장 함수
  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem('darkMode', JSON.stringify(darkMode));
      await AsyncStorage.setItem('language', language);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error("Failed to save settings", error);
    }
  };

  // 상태 변경 시 저장
  useEffect(() => {
    saveSettings();
  }, [darkMode, language, userData]);

  // 앱 시작 시 설정 로드
  useEffect(() => {
    loadSettings();
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const changeLanguage = (newLanguage) => setLanguage(newLanguage);
  const updateUser = (newUserData) => setUserData(newUserData);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        language,
        changeLanguage,
        userData,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
