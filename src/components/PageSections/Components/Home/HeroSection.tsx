import { Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex as="section" minH="100dvh" align="center" justify="center">
      <Flex>
        <VStack textAlign={"center"} w="90%" mx="auto" maxW="800px" spacing="4">
          <Heading as="h1" size="2xl" fontWeight="bold">
            Hiring is expensive, but hiring the wrong person is MORE expensive!
          </Heading>
          <Text fontWeight="semibold">
            I can help you not make that costly mistake that will set you back
            and make your revenue grow.
          </Text>
          <Link
            mt="5"
            href="#main"
            bg="purple.500"
            color="white"
            p="2"
            px="4"
            _hover={{ bg: { lg: "purple.600" } }}
            borderRadius="8px"
          >
            Click to read how
          </Link>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
