import { Flex, Link, useMediaQuery } from "@chakra-ui/react";

const NavLinks = ({ onClose }: { onClose: () => void }) => {
  const [isLargerThanTablet] = useMediaQuery("(min-width: 768px)");
  return (
    <Flex
      as="nav"
      align="start"
      gap={{ base: "6", md: "8", lg: "10" }}
      direction={{ base: "column", md: "row" }}
      fontSize={{ base: "2xl", md: "lg" }}
      fontWeight="medium"
      mt={{ base: "6", md: "0" }}
    >
      <Link onClick={isLargerThanTablet ? undefined : onClose} href="/">
        Home
      </Link>
      <Link onClick={isLargerThanTablet ? undefined : onClose} href="/#about">
        About
      </Link>
      <Link
        onClick={isLargerThanTablet ? undefined : onClose}
        href="/#projects"
      >
        Projects
      </Link>
      <Link
        hideFrom="md"
        onClick={isLargerThanTablet ? undefined : onClose}
        href="/#contact"
      >
        Contact
      </Link>
    </Flex>
  );
};

export default NavLinks;
