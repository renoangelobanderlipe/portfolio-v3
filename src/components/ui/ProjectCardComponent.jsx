import { Button, Typography } from "@material-tailwind/react";
import { CardComponent } from './../CardComponent';
import { CodeIcon, RightArrowIcon } from "../../utils/icons";

export const ProjectCard = ({ reverse = false, hasWebUrl = false }) => {
  return (
    <CardComponent sx={reverse ? "lg:flex-row-reverse flex-col-reverse" : "lg:flex-row flex-col-reverse"}>
      <div className="flex justify-center flex-col w-full gap-[24px]">
        <Typography
          variant="h5"
          className="flex items-center text-[16px] lg:text-[20px] font-fira text-primary capitalize"
        >
          Web Application
        </Typography>
        <Typography
          variant="h2"
          className="flex items-center font-main text-text capitalize font-[700] text-[32px] lg:text-[48px]">
          Project 1
        </Typography>
        <div>
          <Typography
            variant="h1"
            className="flex items-center font-main text-text capitalize font-[400] text-[18px] lg:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </div>
        <div className='flex gap-[24px]'>
          <Button variant="filled" className={`${hasWebUrl ? 'hidden' : 'flex'} gap-2 rounded-full bg-primary shadow-none`}>
            <RightArrowIcon color="#2c705c" />
            <Typography className="flex items-center font-fira text-icon capitalize">
              Visit the app
            </Typography>
          </Button>
          <Button variant="text" className="flex gap-2 rounded-full shadow-none px-0">
            <CodeIcon />
            <Typography className="flex items-center text-[18px] font-fira text-primary capitalize">
              View the code
            </Typography>
          </Button>
        </div>
      </div>
      <div className=' w-full '>
        <img src="profile-container.png" alt="" />
      </div>


    </CardComponent>
  );
}