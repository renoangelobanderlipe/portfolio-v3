import { Icon } from '@iconify/react';
import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import { EnvelopeIcon, RightArrowIcon } from '../../../utils/icons';
import Lottie from 'lottie-react';
import HeroSectionLottie from '../../../assets/json/hero-section.json'
import { AppLayout } from '../../../components/ui/AppLayout';

export const HeroSection = () => {
  return (
    <AppLayout>
      {/* left */}
      <div className="flex flex-col  gap-[48px] w-full">
        {/* heading */}
        <div className="flex flex-col">
          <Typography
            variant="h5"
            className="flex items-center font-fira text-primary capitalize"
          >
            Hi, I'm Reno Angelo
          </Typography>
          <Typography
            variant="h1"
            className=" max-w-[535px] flex items-center font-main text-text capitalize font-[700] text-[64px]">
            Lorem Ipsum dolor sit amet
          </Typography>
        </div>

        {/* buttons */}
        <div className='flex gap-[24px]'>
          <Button variant="text" className="flex gap-2 rounded-full shadow-none px-0">
            <RightArrowIcon />
            <Typography className="flex items-center font-fira text-primary capitalize">
              Browse My Works
            </Typography>
          </Button>
          <Button variant="filled" className="flex gap-2 rounded-full bg-primary shadow-none">
            <EnvelopeIcon />
            <Typography className="flex items-center font-fira text-icon capitalize">
              Reach out to me
            </Typography>
          </Button>

        </div>
      </div>

      {/* right, lottie */}
      <div className="w-full flex items-center">
        <Lottie animationData={HeroSectionLottie} loop={true} width={'150px'} />
      </div>

    </ AppLayout>
  );
}