import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ValueMatrix from '../components/ValueMatrix';
import AcademicAuthority from '../components/AcademicAuthority';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ValueMatrix />
      <AcademicAuthority />
      <AboutSection />
      <ContactSection />
    </>
  );
}
