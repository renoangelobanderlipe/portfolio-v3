import { NavbarComponent } from '../../components/ui/NavbarComponent';
import { AboutSection } from './Sections/AboutSection';
import { HeroSection } from './Sections/HeroSection';

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <AboutSection />
      <AboutSection />
    </>
  );
}

export default HomePage;