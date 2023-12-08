import { Typography } from '@material-tailwind/react';
import { AppLayout } from '../../../components/ui/AppLayout';
import { aboutSection } from '../../../services/api/data';

export const AboutSection = () => {
  const { title, description, section } = aboutSection;

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
            {section}
          </Typography>
          <Typography
            variant="h2"
            className="flex items-center font-main text-text capitalize font-[700] text-[32px] lg:text-[48px]">
            {title}
          </Typography>
          <div>
            <Typography
              variant="h1"
              className="flex items-center font-main text-text capitalize font-[400] text-[18px] lg:text-[20px]">
              {description}
            </Typography>
          </div>
        </div>
      </div>

    </AppLayout>
  );
}