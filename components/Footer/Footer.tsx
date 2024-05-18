import { FC } from 'react';
import { InstagramLogo, LinkedInLogo, TwitterLogo } from '../icons';
import MagneticFramerAnimation from '../MagneticFramerAnimation';

export const Footer: FC = () => {
  return (
    <div className="flex flex-col  border-t px-40 py-12 ">
      <div className="text-lg font-bold text-primary">React CHAD</div>
      <div className="flex ml-[-32px]">
        <MagneticFramerAnimation>
          <InstagramLogo
            width="32px"
            height="32px"
            className="cursor-pointer box-content p-[32px] hoverfill"
          />
        </MagneticFramerAnimation>
        <MagneticFramerAnimation>
          <LinkedInLogo
            width="32px"
            height="32px"
            className="cursor-pointer box-content p-[32px]"
          />
        </MagneticFramerAnimation>
        <MagneticFramerAnimation>
          <TwitterLogo
            width="32px"
            height="32px"
            className="cursor-pointer box-content p-[32px]"
          />
        </MagneticFramerAnimation>
      </div>
      <p className="text-gray-600">@2024 All rights reserved</p>
    </div>
  );
};
