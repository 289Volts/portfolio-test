import { Box, Flex } from "@chakra-ui/react";
import SkillCard from "../../../Blocks/SkillCard";
import CusHeading from "../../../Shared/CusHeading";

const SkillsSection = () => {
  return (
    <Box as="section" w={{ base: "90%", xl: "80%" }} mx="auto">
      <CusHeading heading="Experience" subHeading="Text" />
      <Flex direction={{ base: "column", md: "row" }}>
        <SkillCard />
      </Flex>
    </Box>
  );
};

export default SkillsSection;
