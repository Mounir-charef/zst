'use client';

import React, { useEffect, useState } from 'react';
import { SidebarLink } from '../../data/sidebarLinks';
import { useAppContext } from '../../contexts/appContext';
import { Collapse } from '@mono/ui';
import { cn, useDisclosure } from '@mono/util';
import { Link } from '../../navigation';

const SublinksCollapse = ({
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
                    'text-sm hover:text-primary inline-block pl-5 py-2 border-dashed relative text-dark text-base-color',
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

const SublinksPopover = ({
  children,
  liRef,
}: {
  children: SidebarLink[];
  liRef: React.RefObject<HTMLLIElement>;
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [top, setTop] = useState<null | number>(null);

  useEffect(() => {
    if (liRef.current) {
      liRef.current.addEventListener('mouseenter', onOpen);
      liRef.current.addEventListener('mouseleave', onClose);
    }
    return () => {
      if (liRef.current) {
        liRef.current.removeEventListener('mouseenter', onOpen);
        liRef.current.removeEventListener('mouseleave', onClose);
      }
    };
  }, []);

  useEffect(() => {
    if (liRef.current) {
      const { top, bottom } = liRef.current.getBoundingClientRect();
      setTop((top + bottom) / 2);
    }
  }, []);

  return top ? (
    <div
      className={cn(
        'fixed z-40 transition-all invisible opacity-0 -translate-y-1/2 pl-5',
        isOpen && 'visible opacity-100'
      )}
      style={{
        top: top,
        left: `calc(96px - 20px)`,
      }}
    >
      <div className="bg-white rounded-md shadow border py-[10px] px-5 min-w-52 hidden lg:block">
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
    </div>
  ) : (
    <></>
  );
};

interface SidebarLinkItemSublinksProps {
  children?: SidebarLink[];
  liRef: React.RefObject<HTMLLIElement>;
  isSubMenuOpen: boolean;
}
const SidebarLinkItemSublinks = ({
  isSubMenuOpen,
  children,
  liRef,
}: SidebarLinkItemSublinksProps) => {
  const {
    sidebarStatus: { isCollapsed },
  } = useAppContext();
  return (
    children &&
    children.length > 0 && (
      <>
        <SublinksCollapse isOpen={isSubMenuOpen} children={children} />
        {isCollapsed && <SublinksPopover liRef={liRef} children={children} />}
      </>
    )
  );
};

export default SidebarLinkItemSublinks;
