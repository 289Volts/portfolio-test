import { Box } from "@chakra-ui/react";
import ProjectCard from "../../../Blocks/ProjectCard";
import CusHeading from "../../../Shared/CusHeading";

const data = [
  {
    title: "The Guest Gallery",
    image: "/src/assets/images/tgg.png",
    description:
      "The Guest Gallery was created for event planners and hosts to collect organic photos and videos from the guests at their events. With just your event link, guests can upload images and videos that can be viewed in real time. So far, 5 event organizers have used the service and it's been rated 5 stars by them.",
    tags: [
      "Next.js",
      "MongoDB",
      "TailwindCSS",
      "React Emails",
      "Paystack",
      "Cloudflare R2",
    ],
    liveUrl: "https://www.theguestgallery.com",
  },
  {
    title: "ElBrillo Skincare Webapp",
    image: "/src/assets/images/elbrillo.png",
    description:
      "This business only took orders through her Instagram page and she was losing customers who were trying to shop after she had closed for the day. This e-commerce website was the solution to that. Customers could buy even while she's away. Her revenue increased by 20% within the first 4 months of use",
    tags: [
      "Next.js",
      "MongoDB",
      "TailwindCSS",
      "Cloudinary",
      "Nodemailer",
      "Firebase",
    ],
    liveUrl: "https://www.elbrilloskincare.com.ng",
  },
  {
    title: "ATC Pro Academy Website",
    image: "/src/assets/images/atcpro.png",
    description:
      "This client wanted something personalized where people could get information about her programs and be routed to the payment page. I built this website according to her customization and also set up a Content Management System so that changes can be made without my involvement. With the help of SEO, she has recorded 5% more sales.",
    tags: ["Next.js", "SanityCMS", "TailwindCSS"],
    liveUrl: "https://www.atcproacademy.com",
  },
  {
    title: "Noted Media Group Website",
    image: "/src/assets/images/noted.png",
    description:
      "This project was for a music distribution company looking to promote their services. As the lead frontend developer on this project, I made sure to ensure the website was well optimized for speed and accessibility and also integrated a waitlist feature. With the help of publicity, the company recorded 10% more signups every month.",
    tags: ["Next.js", "MongoDB", "TailwindCSS"],
    liveUrl: "https://www.notedmediagroup.com",
  },
];
const ProjectsSection = () => {
  return (
    <Box
      as="section"
      w={{ base: "90%", xl: "80%" }}
      mx="auto"
      scrollMarginTop={"100px"}
    >
      <CusHeading
        heading="Note-worthy projects"
        subHeading="Proof of my competence"
      />
      <Box
        mt={{ base: "5", md: "6", lg: "7" }}
        gap={{ base: "7", md: "8" }}
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        justifyContent="center"
      >
        {data.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;
