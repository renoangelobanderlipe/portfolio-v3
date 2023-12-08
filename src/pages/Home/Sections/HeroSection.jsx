import { Button, Typography } from '@material-tailwind/react';
import { EnvelopeIcon, RightArrowIcon } from '../../../utils/icons';
import Lottie from 'lottie-react';
import HeroSectionLottie from '../../../assets/json/hero-section.json'
import { AppLayout } from '../../../components/ui/AppLayout';
import { heroSection } from '../../../services/api/data';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const { title, description, my_works, contacts } = heroSection;

  return (
    <AppLayout>
      <div className="flex flex-col gap-[48px] w-full">
        <div className="flex flex-col">
          <Typography
            variant="h5"
            className="flex items-center font-fira font-[16px] lg:font-[24px] text-primary capitalize"
          >
            {title}
          </Typography>
          <Typography
            variant="h1"
            className=" text-[48px] lg:text-[64px] font-[700] max-w-[535px] flex items-center font-main text-text capitalize">
            {description}
          </Typography>
        </div>

        <div className='flex flex-col-reverse lg:flex-row gap-[24px]'>
          <Link to={my_works.url}>
            <Button variant="text" className="flex gap-2 justify-center lg:justify-start rounded-full shadow-none px-0 ">
              <RightArrowIcon />
              <Typography className="flex items-center font-fira text-[18px] text-primary capitalize">
                {my_works.title}
              </Typography>
            </Button>
          </Link>
          <Link to={contacts.url}>
            <Button variant="filled" className="flex gap-2 rounded-full justify-center lg:justify-start bg-primary shadow-none">
              <EnvelopeIcon />
              <Typography className="flex items-center font-fira text-[18px] text-icon capitalize">
                {contacts.title}
              </Typography>
            </Button>
          </Link>

        </div>
      </div>

      <div className="w-full flex items-center">
        <Lottie animationData={HeroSectionLottie} loop={true} width={'150px'} />
      </div>

    </ AppLayout>
  );
}