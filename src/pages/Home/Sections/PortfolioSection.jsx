import { AppLayout } from '../../../components/ui/AppLayout';
import { Button, Typography } from '@material-tailwind/react';
import { ProjectCard } from './../../../components/ui/ProjectCardComponent';
import { BookmarkIcon } from '../../../utils/icons';
import { Link } from 'react-router-dom';

export const PortfolioSection = () => {
  return (
    <AppLayout hasImage={false}>
      <div className='flex flex-col gap-[160px] w-full'>
        <div className="flex flex-col items-center gap-[24px] ">
          <Typography
            variant="h5"
            className=" justify-center font-fira text-[16px] lg:text-[24px] text-primary lowercase"
          >
            03. Portfolio & previous projects
          </Typography>
          <Typography
            variant="h2"
            className="font-main text-text capitalize font-[700] text-[32px] lg:text-[48px]">
            A Web Artisan: Crafting Seamless Experiences
          </Typography>
          <div className='flex flex-col mx-auto max-w-[788px]'>
            <Typography
              variant="h1"
              className="font-main text-text text-center capitalize font-[400] line-clamp-1 text-[18px] lg:text-[20px]">
              As a web developer, I bring creative concepts to life through seamless, user-friendly digital experiences. My portfolio showcases diverse projects, highlighting expertise in front-end and back-end development. Each project reflects a commitment to delivering high-quality solutions that exceed client expectations, from visually stunning websites to robust platforms. Proficient in PHP, JavaScript, Laravel, React, and Vue JS frameworks, I fuse design and functionality to build innovative web solutions.
            </Typography>
          </div>
        </div>
        <div className='flex flex-col  gap-[64px]'>
          <ProjectCard hasWebUrl={true} />
          <ProjectCard reverse={true} />
          <ProjectCard />
        </div>

        <div className='flex justify-center w-full'>
          <Link to="my-projects">
            <Button variant="filled" className="flex gap-2 rounded-full bg-primary shadow-none w-fit">
              <BookmarkIcon />
              <Typography className="flex items-center text-[18px] font-fira text-icon capitalize font-normal">
                All Projects
              </Typography>
            </Button>
          </Link>
        </div>
      </div>

    </AppLayout>
  );
}