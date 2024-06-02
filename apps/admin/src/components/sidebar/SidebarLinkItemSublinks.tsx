'use client';

import React, { useEffect, useState } from 'react';
import { SidebarLink } from '../../data/sidebarLinks';
import { useAppContext } from '../../contexts/appContext';
import { Collapse } from '@mono/ui';
import { cn, useDisclosure } from '@mono/util';
import { Link, usePathname } from '../../navigation';

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
  const pathname = usePathname();
  return (
    <Collapse isOpen={isOpen}>
      <div className={cn('py-1 pl-6', isCollapsed && 'lg:hidden')}>
        <ul
          className="border-muted-foreground flex flex-col gap-0.5 border-l border-dashed"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children.map((child) => {
            return (
              <li key={child.id}>
                <Link
                  className={cn(
                    'hover:text-primary hover:before:border-primary text-foreground relative inline-block border-dashed py-2 pl-5 text-sm',
                    'before:border-muted-foreground before:absolute before:left-0.5 before:top-1/2 before:w-3 before:-translate-y-1/2 before:border before:border-dashed',
                    pathname === child.href &&
                      'text-primary before:border-primary',
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
  const pathname = usePathname();

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
  }, [isOpen]);

  return top ? (
    <div
      className={cn(
        'invisible fixed z-50 -translate-y-1/2 pl-5 opacity-0 transition-all',
        isOpen && 'visible opacity-100',
      )}
      style={{
        top: top,
        left: `calc(96px - 20px)`,
      }}
    >
      <div className="bg-background hidden min-w-52 rounded-md border px-5 py-[10px] shadow lg:block">
        <ul>
          {children.map((link) => {
            return (
              <li key={link.id}>
                {' '}
                <Link
                  className={cn(
                    'hover:text-primary inline-block whitespace-nowrap py-2 text-sm',
                    pathname === link.href && 'text-primary',
                  )}
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
  // setCollapsedItems: React.Dispatch<React.SetStateAction<ID[]>>
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
