'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Collapse = ({ children, isOpen }: IProps) => {
  const collapseRef = useRef<HTMLDivElement>(null);
  const collapseWrapRef = useRef<HTMLDivElement>(null);

  const [defaultOpen] = useState(isOpen);

  const setHeight = useCallback(() => {
    const collapse = collapseRef.current;
    const collapseWrap = collapseWrapRef.current;

    if (!collapse || !collapseWrap) return;

    if (isOpen) {
      collapse.style.height = `${collapseWrap.offsetHeight}px`;
    } else {
      collapse.style.height = `${0}px`;
    }
  }, [isOpen]);

  useEffect(() => {
    setHeight();
    const observer = new ResizeObserver(() => {
      setHeight();
    });

    if (collapseWrapRef.current) {
      observer.observe(collapseWrapRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isOpen, setHeight]);

  return (
    <div
      style={{
        transition: 'height 0.4s',
        height: defaultOpen ? undefined : 0,
      }}
      ref={collapseRef}
      className="overflow-hidden"
    >
      <div ref={collapseWrapRef}>{children}</div>
    </div>
  );
};
