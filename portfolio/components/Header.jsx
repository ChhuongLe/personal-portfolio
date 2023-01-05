import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Header () {
  return (
    <header>
      <div>
        {/* socials icons */}
        <SocialIcon
          url="https://linkedin.com/in/chhuongle"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/chhuongle"
          fgColor="gray"
        />
      </div>
    </header>
  )
}