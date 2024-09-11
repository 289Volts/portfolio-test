import { Box, Flex } from "@chakra-ui/react";
import TestimonialCard from "../../../Blocks/TestimonialCard";
import CusHeading from "../../../Shared/CusHeading";

type TTestimonialSectionProps = {
  position: "first" | "last";
  isVisible: boolean;
};
const TestimonialSection = ({
  position,
  // isVisible,
}: TTestimonialSectionProps) => {
  return (
    <Box
      // display={isVisible ? "block" : "none"}
      as="section"
      w={{ base: "90%", xl: "80%" }}
      maxWidth="1440px"
      mx="auto"
    >
      <CusHeading
        heading="People who trust me"
        subHeading={
          position === "first"
            ? "Don't take my word for it, here's people's feedback about me."
            : "Here's more feedback from my clients."
        }
      />
      <Flex direction={{ base: "column", md: "row" }}>
        <TestimonialCard />
      </Flex>
    </Box>
  );
};

export default TestimonialSection;
