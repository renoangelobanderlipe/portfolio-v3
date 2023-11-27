import { Typography } from '@material-tailwind/react';
import React from 'react';
import { AppLayout } from '../../../components/ui/AppLayout';

export const AboutSection = () => {
  return (
    <AppLayout hasImage={false}>
      <div className='flex gap-[80px] p-[100px]'>
        <div className=' w-full '>
          <img src="profile-container.png" alt="" />
        </div>

        <div className="flex justify-center flex-col w-full gap-[24px]">
          <Typography
            variant="h5"
            className="flex items-center font-fira text-primary lowercase"
          >
            01. ABOUT ME
          </Typography>
          <Typography
            variant="h2"
            className="flex items-center font-main text-text capitalize font-[700] text-[48px]">
            Lorem Ipsum dolor sit amet
          </Typography>
          <div>
            <Typography
              variant="h1"
              className="flex items-center font-main text-text capitalize font-[400] text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
        </div>
      </div>

    </AppLayout>
  );
}