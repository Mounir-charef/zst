import { memo } from 'react';
import { NavItems } from '../../config';
import SidebarLink from './SidebarLink';
import SidebarMenu from './SidebarMenu';

const SidebarNavigation = () => {
  return (
    <nav className="flex flex-grow flex-col gap-4">
      {NavItems.map((item) => {
        if (item.type === 'link')
          return <SidebarLink key={item.title} {...item} />;

        return <SidebarMenu key={item.title} {...item} />;
      })}
    </nav>
  );
};

export default memo(SidebarNavigation);
