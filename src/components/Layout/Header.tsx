import {
  Box,
  Flex,
  IconButton,
  Link,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import HamburgerIcon from "../Icons/HamburgerIcon";
import Logo from "./Logo";
import MobileNavMenu from "./MobileNavMenu";
import NavLinks from "./NavLinks";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanTablet] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      bg="white"
      as="header"
      shadow="sm"
      position="fixed"
      insetInline="0"
      zIndex="10"
    >
      <Flex
        justify="space-between"
        mx="auto"
        py="4"
        width={{ base: "90%", xl: "80%" }}
        maxWidth="1440px"
        align="center"
      >
        <Logo />

        <IconButton
          hideFrom="md"
          onClick={onOpen}
          variant="ghost"
          aria-label="menu"
          icon={<HamburgerIcon className="h-6 w-6" />}
        />
        {isLargerThanTablet && <NavLinks onClose={onClose} />}
        <Link
          fontSize="lg"
          fontWeight="medium"
          hideBelow="md"
          bg="purple.500"
          color="white"
          p="2"
          px="4"
          _hover={{ textDecoration: "none", bg: "purple.600" }}
          borderRadius="8px"
          onClick={onClose}
          href="/#contact"
        >
          Contact
        </Link>
        <MobileNavMenu isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
};
