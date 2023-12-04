import { Button, Typography } from '@material-tailwind/react';
import { AppLayout } from '../../../components/ui/AppLayout';
import Lottie from 'lottie-react';
import ContactLottie from '../../../assets/json/contact-section.json';
import { Icon } from '@iconify/react';

export const ContactSection = () => {
  return (
    <AppLayout>
      <div className='flex flex-col lg:flex-row gap-[64px] h-fit max-w-[1120px]'>
        <div className='flex w-full items-center gap-[24px]'>
          <Lottie animationData={ContactLottie} loop={true} />
        </div>
        <div className='flex flex-col justify-center content-center w-full gap-[48px]'>
          <div className='flex flex-col gap-[24px]'>
            <Typography className='text-text font-[20px]'>
              If you could instantly access the expertise of a software specialist, how would you proceed?
            </Typography>
            <Typography className='text-text font-[20px]'>
              Do you want to begin a new project or just say ‘hey’?
            </Typography>
          </div>
          <Button variant="outlined" className="flex gap-2 border-primary rounded-full justify-center lg:justify-start lg:w-fit">
            <Icon icon="ph:envelope-simple-duotone" width={'32px'} color="#9FFA82" />
            <Typography className="flex items-center font-[18px] font-fira text-primary capitalize">
              Contact Me
            </Typography>
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}