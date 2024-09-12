import { Box, Flex, Stack, Text } from "@chakra-ui/react";

type TExperienceCardProps = {
  name: string;
  role: string;
  duration: string;
  desc: string;
};
const ExperienceCard = ({
  name,
  role,
  duration,
  desc,
}: TExperienceCardProps) => {
  return (
    <Flex
      key={name}
      direction="column"
      // width={{ base: "100%", md: "45%" }}
      flex="1"
      basis={{ base: "100%", md: "40%" }}
      gap="4"
      bg="white"
      p={{ base: "4", md: "6" }}
      borderRadius="md"
      border={"1px solid #E2E8F0"}
      shadow="sm"
      position="relative"
    >
      <Stack fontWeight="bold" spacing="">
        <Box>
          <Text fontSize={{ base: "lg", md: "2xl" }}>{name}</Text>
          <Text fontSize={{ base: "lg" }}>{duration}</Text>
        </Box>
        <Text>{role}</Text>
      </Stack>
      <Text>{desc}</Text>
    </Flex>
  );
};

export default ExperienceCard;
