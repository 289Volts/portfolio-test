import { Box, Flex } from "@chakra-ui/react";
import ExperienceCard from "../../../Blocks/ExperienceCard";
import CusHeading from "../../../Shared/CusHeading";

const data = [
  {
    name: "Freelance",
    role: "Frontend Developer",
    duration: "November 2023 - Present",
    desc: "Developed and maintained high quality websites and well tested web apps for clients. Improving website performance by 25% and reduced page load times by 20%. Developed a SaaS product using NextJs resulting in a 20% increase in revenue.",
  },
  {
    name: "CooBase GmBh",
    role: "Frontend Developer",
    duration: "July 2023 - November 2023",
    desc: "Collaborated with the team lead to improve Vuetify component testing, boosting task delivery speed by 20% and improving API integration. Researched and applied strategies to reduce compilation times by 20%, increasing overall efficiency. Designed semantic HTML elements and optimized components, improving performance by 35% and enhancing developer experience.",
  },
  // {
  //   name: "CooBase GmBh",
  //   role: "Frontend Developer",
  //   duration: "July 2023 - November 2023",
  //   desc: "Collaborated to enhance Vuetify component testing, boosting task delivery speed by 20% and improving API integration. Researched and applied strategies to reduce compilation times by 20%, increasing overall efficiency. Designed semantic HTML elements and optimized Vue.js components, improving performance by 35% and enhancing developer experience.",
  // },
  // {
  //   name: "CooBase GmBh",
  //   role: "Frontend Developer",
  //   duration: "July 2023 - November 2023",
  //   desc: "Collaborated to enhance Vuetify component testing, boosting task delivery speed by 20% and improving API integration. Researched and applied strategies to reduce compilation times by 20%, increasing overall efficiency. Designed semantic HTML elements and optimized Vue.js components, improving performance by 35% and enhancing developer experience.",
  // },
];
const ExperienceSection = () => {
  return (
    <Box as="section" w={{ base: "90%", xl: "80%" }} mx="auto" maxWidth="900px">
      <CusHeading
        heading="My Experience"
        subHeading="Here's where I've worked"
      />
      <Flex
        mt={{ base: "5", md: "6", lg: "7" }}
        direction={{ base: "column", md: "row" }}
        align="stretch"
        flexWrap="wrap"
        gap={{ base: "4", md: "6" }}
      >
        {data.map((item) => (
          <ExperienceCard key={item.name} {...item} />
        ))}
      </Flex>
    </Box>
  );
};

export default ExperienceSection;
