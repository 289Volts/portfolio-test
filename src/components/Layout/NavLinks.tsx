import { Link, VStack } from "@chakra-ui/react";

const NavLinks = ({ onClose }: { onClose: () => void }) => {
  return (
    <VStack
      as="nav"
      align="start"
      spacing="6"
      fontSize="2xl"
      mt="6"
      fontWeight="medium"
    >
      <Link onClick={onClose} href="/">
        Home
      </Link>
      <Link onClick={onClose} href="/#about">
        About
      </Link>
      <Link onClick={onClose} href="/#projects">
        Projects
      </Link>
      <Link onClick={onClose} href="/#contact">
        Contact
      </Link>
    </VStack>
  );
};

export default NavLinks;
