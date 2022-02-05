import Contact from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Profile from "../components/ProfileSection";
import Project from "../components/ProjectSection";
import Skill from "../components/SkillSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
