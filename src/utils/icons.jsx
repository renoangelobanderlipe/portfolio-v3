import { Icon } from '@iconify/react';

const bgColor = "#0F0F0F";

export const LinkedInIcon = () => <Icon icon="mdi:linkedin" width={'24px'} color={bgColor} />;

export const GitHubIcon = () =>
  <Icon icon="mdi:github" width={'24px'} color={bgColor} />;

export const BookmarkIcon = ({ color = '#0B362A', size = "24px" }) => {
  return (
    <Icon icon="ph:bookmarks-duotone" width={size} color="#0B362A" />
  );
}

export const ChevronRightIcon = ({ size = "24px", color = "#9ffa82" }) => {
  return (
    <Icon icon="material-symbols:chevron-right" width={size} color={color} />
  )
}

export const EnvelopeIcon = () =>
  <Icon icon="ph:envelope-simple-duotone" width={'32px'} color="#0B362A" />

export const RightArrowIcon = ({ color = "#9ffa82" }) => {
  return (
    <Icon icon="ph:arrow-fat-lines-right-duotone" width={'32px'} color={color} />
  )
}

export const CodeIcon = () => <Icon icon="ph:code-bold" width={'32px'} color="#9ffa82" />


/** TECHNOLOGY ICONS */
export const LaravelIcon = () => <Icon icon="devicon:laravel" width={'75px'} />
export const ReactIcon = () => <Icon icon="logos:react" width={'75px'} />
export const VueIcon = () => <Icon icon="logos:vue" width={'75px'} />
export const PHPIcon = () => <Icon icon="bxl:php" color="white" width={'75px'} />
export const JavaScriptIcon = () => <Icon icon="logos:gitlab" width={'75px'} />
export const InertiaJSIcon = () => <Icon icon="simple-icons:inertia" color="white" width={'75px'} />
export const NodeJSIcon = () => <Icon icon="la:node" color="white" width={'75px'} />
export const TailwindCSSIcon = () => <Icon icon="devicon:tailwindcss" width={'75px'} />
export const MySQLIcon = () => <Icon icon="logos:mysql" width={'75px'} />
export const FlutterIcon = () => <Icon icon="logos:flutter" width={'50px'} />
export const DartIcon = () => <Icon icon="logos:dart" width={'60px'} />
export const GitIcon = () => <Icon icon="devicon:git" width={'75px'} />
export const GithubIcon = () => <Icon icon="ri:github-fill" width={'75px'} color="white" />
export const PostmanIcon = () => <Icon icon="devicon:postman" width={'75px'} color="white" />
export const VSCodeIcon = () => <Icon icon="devicon:vscode" width={'75px'} color="white" />
export const DockerIcon = () => <Icon icon="logos:docker-icon" width={'80px'} color="white" />