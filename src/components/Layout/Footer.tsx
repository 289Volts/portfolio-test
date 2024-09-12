import { Box, Flex, Link } from "@chakra-ui/react";
import ExtLinkIcon from "../Icons/ExtLinkIcon";
import GithubIcon from "../Icons/GithubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Box as="footer" mt="10" p={{ base: "8", md: "12" }}>
      <Flex direction="column" align="center" gap="4">
        <Logo />
        <Flex gap="3" fontWeight="medium" flexWrap="wrap" justify="center">
          <Link
            display="flex"
            isExternal
            alignItems="center"
            href="https://www.twitter.com/_289volts"
          >
            <TwitterIcon />: Twitter
            <ExtLinkIcon className="ml-1" />
          </Link>{" "}
          |
          <Link
            display="flex"
            isExternal
            alignItems="center"
            href="https://www.linkedin.com/in/joshuaroland"
          >
            <LinkedInIcon />: LinkedIn
            <ExtLinkIcon className="ml-1" />
          </Link>{" "}
          |
          <Link
            display="flex"
            isExternal
            alignItems="center"
            href="https://www.github.com/289volts"
          >
            <GithubIcon />: GitHub
            <ExtLinkIcon className="ml-1" />
          </Link>
        </Flex>
        <Link
          display="flex"
          isExternal
          alignItems="center"
          href="mailto:joshuaroland289@gmail.com"
        >
          Send me an email
          <ExtLinkIcon className="ml-1" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
