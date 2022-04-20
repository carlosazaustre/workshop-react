import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { HiMoon, HiSun } from 'react-icons/hi';

export function DarkMode() {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<HiMoon />, <HiSun />);
  return (
    <IconButton
      colorScheme='blue'
      aria-label='Dark Mode'
      icon={icon}
      onClick={toggleColorMode}
    />
  );
}
