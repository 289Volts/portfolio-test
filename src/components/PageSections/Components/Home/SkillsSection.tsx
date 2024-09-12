import { Box } from "@chakra-ui/react";
import SkillCard from "../../../Blocks/SkillCard";
import CusHeading from "../../../Shared/CusHeading";

const data = [
  {
    name: "NextJs",
    image: "/src/assets/images/nextjs.svg",
  },
  {
    name: "NodeJS",
    image: "/src/assets/images/nodejs.svg",
  },
  {
    name: "MongoDB",
    image: "/src/assets/images/mongodb.svg",
  },
  {
    name: "TailwindCSS",
    image: "/src/assets/images/tailwindcss.svg",
  },
  {
    name: "Chakra UI",
    image: "/src/assets/images/chakra.png",
  },
  {
    name: "Vitest",
    image: "/src/assets/images/vitest.svg",
  },
  {
    name: "Testing Library",
    image: "/src/assets/images/testinglib.png",
  },
  {
    name: "Framer Motion",
    image: "/src/assets/images/framer.svg",
  },
  {
    name: "Framer",
    image: "/src/assets/images/framer.svg",
  },
];
const SkillsSection = () => {
  return (
    <Box as="section" w={{ base: "90%", xl: "80%" }} mx="auto">
      <CusHeading
        heading="My Skill Set"
        subHeading="Some of the technologies and tools I use in my work"
      />
      <Box
        mt={{ base: "5", md: "8", lg: "7" }}
        gap={{ base: "7", md: "10" }}
        display="grid"
        gridTemplateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
        justifyContent="center"
        mx="auto"
        maxW="600px"
        className="skillsGrid"
      >
        {" "}
        {data.map((item) => (
          <SkillCard
            key={item.name}
            {...item}
            hasOddLast={!!(data.length % 2)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;
