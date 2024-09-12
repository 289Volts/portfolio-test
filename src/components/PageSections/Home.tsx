import AboutSection from "./Components/Home/AboutSection";
import ExperienceSection from "./Components/Home/ExperienceSection";
import HeroSection from "./Components/Home/HeroSection";
import ProjectsSection from "./Components/Home/ProjectsSection";
import SkillsSection from "./Components/Home/SkillsSection";
import TestimonialSection from "./Components/Home/TestimonialSection";
import ValuePropSection from "./Components/Home/ValuePropSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ValuePropSection />
      <AboutSection />
      <TestimonialSection position="first" isVisible={false} />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      {/* <TestimonialSection position="last" isVisible /> */}
      {/* <ContactSection /> */}
    </>
  );
};

export default Home;
