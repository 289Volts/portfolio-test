import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import ExtLinkIcon from "../../../Icons/ExtLinkIcon";
import CusHeading from "../../../Shared/CusHeading";

const AboutSection = () => {
  return (
    <Box
      id="about"
      as="section"
      w={{ base: "90%", xl: "80%" }}
      maxW="1440px"
      scrollMarginTop={"100px"}
      mx="auto"
    >
      <CusHeading
        heading="Who am I?"
        subHeading="Here's a little bit about me 😉"
      />
      <Flex
        direction={{ base: "column", md: "row" }}
        align={["start", "center"]}
        gap={["6", "10"]}
        mt={{ base: "5", md: "6", lg: "7" }}
      >
        <Box
          textAlign={{ base: "center", md: "left" }}
          w={{ base: "100%", md: "50%" }}
          fontSize={{ base: "md", md: "lg", xl: "xl" }}
        >
          <Text>
            My name is Roland Joshua 👋🏽, a frontend developer skilled with
            NextJS, TailwindCSS and MongoDB to name a few, and with an interest
            in sales, I'm passionate about using my technical skills to help
            businesses grow.
          </Text>
          <Text my="4">
            I got into programming due to a motivation to build my own company.
            I once had a startup idea but I couldn&apos;t bring the idea to
            fruition because of my skills limitation but with perseverance and
            dedication, I have been able to build a product of my own called{" "}
            <Link
              display="inline-flex"
              alignItems="center"
              gap="1"
              fontWeight="bold"
              isExternal
              href="www.theguestgallery.com"
            >
              The Guest Gallery <ExtLinkIcon />
            </Link>
          </Text>
          <Text>
            Interested in working with me?{" "}
            <Link
              display="inline-flex"
              isExternal
              alignItems="center"
              href="mailto:joshuaroland289@gmail.com"
            >
              Send me an email
              <ExtLinkIcon className="ml-1" />
            </Link>
          </Text>
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          borderRadius="md"
          overflow="hidden"
        >
          <Image
            aspectRatio={{ base: "3/3", md: "auto", lg: "3/3", xl: "4/3" }}
            objectFit="cover"
            objectPosition="top center"
            src="/assets/images/roland.jpeg"
            alt=""
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
