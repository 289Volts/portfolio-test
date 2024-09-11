import { Heading, Stack, Text } from "@chakra-ui/react";

const CusHeading = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading?: string;
}) => {
  return (
    <Stack gap="1" textAlign="center" mt={{ base: "14", md: "20" }}>
      <Heading size={{ base: "xl", lg: "2xl" }}>{heading}</Heading>
      <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight="medium">
        {subHeading}
      </Text>
    </Stack>
  );
};

export default CusHeading;
