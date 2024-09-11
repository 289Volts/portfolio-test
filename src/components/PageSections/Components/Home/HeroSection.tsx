import { Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex as="section" minH="100dvh" align="center" justify="center">
      <Flex>
        <VStack textAlign={"center"} w="90%" mx="auto">
          <Heading as="h1" size="2xl" fontWeight="bold">
            Heading
          </Heading>
          <Text>Hero Section</Text>
          <Link href="#about">About</Link>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
