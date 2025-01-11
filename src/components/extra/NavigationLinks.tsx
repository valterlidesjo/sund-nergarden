import React from 'react'
import { NavLinks } from '../../pages/extra/NavLinks';

const NavigationLinks = React.memo(({ onClick }: { onClick: (link: string) => void }) => (
    <>
      {NavLinks.map((item, index) => (
        <p key={index} onClick={() => onClick(item.link)}>
          {item.text}
        </p>
      ))}
    </>
  ));

export default NavigationLinks