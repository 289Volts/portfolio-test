import { Box, Flex, IconButton, Link } from "@chakra-ui/react";
import HamburgerIcon from "../Icons/HamburgerIcon";

export const Header = () => {
  return (
    <Box bg="white" as="header">
      <Flex justify="space-between" mx="auto" py="4" width="90%" align="center">
        <Link href="/">289Volt⚡️</Link>
        <IconButton
          variant="ghost"
          aria-label="menu"
          icon={<HamburgerIcon className="h-6 w-6" />}
        />
      </Flex>
    </Box>
  );
};
