import { Typography } from '@material-tailwind/react';
import { AppLayout } from '../../../components/ui/AppLayout';
import { DartIcon, DockerIcon, FlutterIcon, GitIcon, GithubIcon, InertiaJSIcon, JavaScriptIcon, LaravelIcon, MySQLIcon, NodeJSIcon, PHPIcon, PostmanIcon, ReactIcon, TailwindCSSIcon, VSCodeIcon, VueIcon } from './../../../utils/icons';

export const ToolsSection = () => {
  return (
    <AppLayout>
      <div className='flex flex-col justify-center text-center mx-auto w-full gap-[80px] py-[100px]  '>
        <div className="flex flex-col gap-[24px] ">
          <Typography
            variant="h5"
            className=" justify-center text-[16px] lg:text-[24px] font-fira text-primary lowercase"
          >
            02. Tools i use
          </Typography>
          <Typography
            variant="h2"
            className="font-main text-text capitalize font-[700] text-[32px] lg:text-[48px]">
            Tech Stack Proficiency
          </Typography>
          <div className='flex flex-col mx-auto max-w-[788px]'>
            <Typography
              variant="h1"
              className="font-main text-text capitalize font-[400] line-clamp-1 text-[18px] lg:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-[24px] mx-auto max-w-[788px]">
          <LaravelIcon />
          <ReactIcon />
          <VueIcon />
          <PHPIcon />
          <JavaScriptIcon />
          <InertiaJSIcon />
          <NodeJSIcon />
          <TailwindCSSIcon />
          <MySQLIcon />
          <FlutterIcon />
          <DartIcon />
          <GitIcon />
          <GithubIcon />
          <PostmanIcon />
          <VSCodeIcon />
          <DockerIcon />
        </div>
      </div>

    </AppLayout>
  );
}