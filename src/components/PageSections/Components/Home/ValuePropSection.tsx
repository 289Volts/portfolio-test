import { Box, Stack, Text } from "@chakra-ui/react";
import CusHeading from "../../../Shared/CusHeading";

const ValuePropSection = () => {
  return (
    <Box
      id="main"
      as="section"
      w={{ base: "90%", xl: "80%" }}
      maxW="800px"
      mx="auto"
    >
      <CusHeading
        heading="Why should you hire me?"
        subHeading="Here's a little bit about me 😉"
      />
      <Stack gap={["4", "10"]} mt="4">
        <Box fontSize={{ base: "md", md: "lg", xl: "xl" }}>
          <Text align="center" mb="4">
            In today's digital age, it's essential for your business to be able
            to <strong>properly communicate your brand message</strong> and have
            a <strong>strong online presence</strong>. Unfortunately, if
            potential customers can't easily find you online or when your
            customers have a poor experience with your products, your business
            will suffer{" "}
            <Box as="span" fontWeight="bold" color="red.500">
              financial losses 📉
            </Box>
            . This can occur due to poorly optimized and unresponsive web
            interfaces and applications.
          </Text>
          <Text align="center">
            By working with me, you not only get someone who is technically
            skilled, you also have{" "}
            <strong className="text-green-500">
              someone who is interested in your business growth 📈
            </strong>
            . As a web developer, I can offer your business a solution to these
            problems. I can improve your online presence, make your web
            applications or websites more optimized, and easier to navigate, so
            that you can record higher conversion rates.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default ValuePropSection;
