import { Box, HStack, IconButton, StatusBar, Icon } from "native-base";
import React from "react";

function AppBar(text = "") {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        bg="violet.800"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
      >
        <HStack alignItems="center">
          <IconButton icon={<Icon size="md" name="menu" color="white" />} />

          <Text color="white" fontSize="20" fontWeight="bold">
            {text}
          </Text>
        </HStack>
      </HStack>
    </>
  );
}

export default AppBar;
