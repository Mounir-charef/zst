import { memo } from 'react';
import { NavItems, userMenuLinks } from '../../config';
import MobileNavMenu from './MobileNavMenu';
import MobileNavLink from './MobileNavLink';

const MobileMenuNavigation = () => {
  return (
    <>
      {userMenuLinks
        .filter((item) => !item)
        .map((item) => (
          <MobileNavLink key={item.label} {...item} title={item.label} />
        ))}
      {NavItems.map((item) => {
        if (item.type === 'link') {
          return <MobileNavLink key={item.title} {...item} />;
        }
        return <MobileNavMenu key={item.title} {...item} />;
      })}
    </>
  );
};

export default memo(MobileMenuNavigation);
