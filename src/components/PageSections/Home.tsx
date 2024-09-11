import AboutSection from "./Components/Home/AboutSection";
import ContactSection from "./Components/Home/ContactSection";
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
      <TestimonialSection position="first" isVisible />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialSection position="last" isVisible />
      <ContactSection />
    </>
  );
};

export default Home;
