import { Typography } from '@material-tailwind/react';
import React from 'react';
import { AppLayout } from '../../../components/ui/AppLayout';

export const AboutSection = () => {
  return (
    <AppLayout hasImage={false}>
      <div className='flex lg:flex-row flex-col gap-[84px]'>
        <div className='w-full md:flex md:justify-center'>
          <img src="profile-container.png" alt="" />
        </div>

        <div className="flex justify-center flex-col w-full gap-[24px]">
          <Typography
            variant="h5"
            className="flex items-center text-[16px] lg:text-[24px] font-fira text-primary lowercase"
          >
            01. ABOUT ME
          </Typography> 
          <Typography
            variant="h2"
            className="flex items-center font-main text-text capitalize font-[700] text-[32px] lg:text-[48px]">
            A Web Artisan
          </Typography>
          <div>
            <Typography
              variant="h1"
              className="flex items-center font-main text-text capitalize font-[400] text-[18px] lg:text-[20px]">
              Hello, I'm Reno Angelo – a passionate web developer with expertise in both front-end and back-end technologies. Specializing in crafting robust and secure APIs, I bring a commitment to industry standards and a creative touch to every project. Explore my portfolio for a glimpse into seamless, innovative web solutions.
            </Typography>
          </div>
        </div>
      </div>

    </AppLayout>
  );
}