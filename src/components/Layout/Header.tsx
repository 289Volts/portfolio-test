import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import HamburgerIcon from "../Icons/HamburgerIcon";
import Logo from "./Logo";
import MobileNavMenu from "./MobileNavMenu";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" as="header">
      <Flex justify="space-between" mx="auto" py="4" width="90%" align="center">
        <Logo />

        <IconButton
          onClick={onOpen}
          variant="ghost"
          aria-label="menu"
          icon={<HamburgerIcon className="h-6 w-6" />}
        />
        <MobileNavMenu isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
};
