import React from 'react';
import { SidebarLink } from '../../data/sidebarLinks';
import Link from 'next/link';
import { useAppContext } from '../../contexts/appContext';
import { Collapse } from '@mono/ui';
import { cn } from '@mono/util';

const Sublinks = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: SidebarLink[];
}) => {
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();
  return (
    <Collapse isOpen={isOpen}>
      <div className={cn('pl-6 py-1', isCollapsed && 'lg:hidden')}>
        <ul
          className="border-l border-dashed flex flex-col gap-0.5"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children.map((child) => {
            return (
              <li key={child.id}>
                <Link
                  className={cn(
                    'text-sm hover:text-primary inline-block pl-5 py-2 border-dashed relative text-dark text-text-color',
                    'before:absolute before:left-0.5 before:top-1/2 before:-translate-y-1/2 before:w-3 before:border-dashed before:border'
                  )}
                  href={child.href}
                >
                  {child.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Collapse>
  );
};

const SublinksCollapsed = ({ children }: { children: SidebarLink[] }) => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-[76px] bg-white rounded-md shadow border py-[10px] px-5 min-w-52 hidden lg:block">
      <ul>
        {children.map((link) => {
          return (
            <li key={link.id}>
              {' '}
              <Link
                className="inline-block whitespace-nowrap py-2 text-sm hover:text-primary"
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

interface SidebarLinkItemSublinksProps {
  children?: SidebarLink[];
  isSubMenuOpen: boolean;
}
const SidebarLinkItemSublinks = ({
  isSubMenuOpen,
  children,
}: SidebarLinkItemSublinksProps) => {
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();
  return (
    children &&
    children.length > 0 && (
      <>
        <Sublinks isOpen={isSubMenuOpen} children={children} />
        {isCollapsed && <SublinksCollapsed children={children} />}
      </>
    )
  );
};

export default SidebarLinkItemSublinks;
