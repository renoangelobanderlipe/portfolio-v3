import { Button, IconButton, Navbar, Typography } from "@material-tailwind/react";
import { GitHubIcon, LinkedInIcon, EnvelopeIcon } from './../../utils/icons';

export const NavbarComponent = () => {
  return (
    <Navbar
      className="sticky top-0 z-10 h-[86px] max-w-full rounded-none flex justify-between items-center  border-primary -mb-[88px] px-mainPhone lg:px-mainDesktop backdrop-blur-[1.5px] bg-transparent border-b-[0.5px] "
      variant="filled"
      color="transparent"
      blurred={true}>
      <div className="flex gap-4 ">
        <IconButton variant={"filled"} className="rounded-full shadow-none bg-[#9FFA82]">
          <LinkedInIcon />
        </IconButton>
        <IconButton variant={"filled"} className="rounded-full shadow-none bg-[#9FFA82]">
          <GitHubIcon />
        </IconButton>
      </div>
      <Button variant="filled" className="flex gap-2 rounded-full bg-primary shadow-none">
        <EnvelopeIcon />
        <Typography className="flex items-center font-fira text-icon capitalize">Contact</Typography>
      </Button>
    </Navbar>
  );
}