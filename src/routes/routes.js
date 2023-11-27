import { HomePage, ProjectPage } from "../pages/index";

export const pages = [
  {
    id: 0,
    name: 'Home',
    path: '/',
    component: <HomePage />
  },
  {
    id: 1,
    name: 'Projects',
    path: '/projects',
    component: <ProjectPage />
  }
]
