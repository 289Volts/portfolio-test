import { Box, Flex } from "@chakra-ui/react";
import ExperienceCard from "../../../Blocks/ExperienceCard";
import CusHeading from "../../../Shared/CusHeading";

const ExperienceSection = () => {
  return (
    <Box as="section" w={{ base: "90%", xl: "80%" }} mx="auto">
      <CusHeading heading="Experience" subHeading="Text" />
      <Flex direction={{ base: "column", md: "row" }}>
        <ExperienceCard />
      </Flex>
    </Box>
  );
};

export default ExperienceSection;
