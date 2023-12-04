import HomePage from "../pages/Home/HomePage";
import { AboutSection } from "../pages/Home/Sections/AboutSection";
import { ContactSection } from "../pages/Home/Sections/ContactSection";
import { HeroSection } from "../pages/Home/Sections/HeroSection";
import { PortfolioSection } from "../pages/Home/Sections/PortfolioSection";
import { ToolsSection } from "../pages/Home/Sections/ToolsSection";
import ProjectsPage from './../pages/Projects/ProjectsPage';

export const pages = [
  {
    id: 0,
    name: 'Home Page',
    value: 'Home',
    path: '/',
    component: <HomePage />
  },
  {
    id: 1,
    name: 'Projects Page',
    value: 'Projects',
    path: '/my-projects',
    component: <ProjectsPage />
  }
]

export const pageSections = [
  {
    id: 0,
    name: 'Hero Section',
    value: 'Hero',
    component: <HeroSection />
  },
  {
    id: 1,
    name: 'About Section',
    value: 'About',
    component: <AboutSection />
  },
  {
    id: 2,
    name: 'Tools Section',
    value: 'Tools',
    component: <ToolsSection />
  },
  {
    id: 3,
    name: 'Portfolio Section',
    value: 'Portfolio',
    component: <PortfolioSection />
  },
  {
    id: 4,
    name: 'Contact Section',
    value: 'Contact',
    component: <ContactSection />
  },
]