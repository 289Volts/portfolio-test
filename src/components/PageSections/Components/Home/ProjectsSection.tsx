import { Box, Flex } from "@chakra-ui/react";
import ProjectCard from "../../../Blocks/ProjectCard";
import CusHeading from "../../../Shared/CusHeading";

const ProjectsSection = () => {
  return (
    <Box as="section" w={{ base: "90%", xl: "80%" }} mx="auto">
      <CusHeading heading="Experience" subHeading="Text" />
      <Flex direction={{ base: "column", md: "row" }}>
        <ProjectCard />
      </Flex>
    </Box>
  );
};

export default ProjectsSection;
