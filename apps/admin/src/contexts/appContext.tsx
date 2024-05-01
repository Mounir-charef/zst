'use client';

import { createContext, useContext, useState } from 'react';
import { SidebarStatus } from '../types/sidebar-status';

interface AppContextValue {
  sidebarStatus: SidebarStatus;
  openSidebar: () => void;
  closeSidebar: () => void;
  collapseSidebar: () => void;
}

const appContext = createContext<AppContextValue>({} as AppContextValue);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebarStatus, setSidebarStatus] = useState({
    isCollapsed: false,
    isOpen: false,
  });

  const openSidebar = () => {
    setSidebarStatus((current) => {
      return {
        ...current,
        isOpen: true,
      };
    });
  };

  const closeSidebar = () => {
    setSidebarStatus((current) => {
      return {
        ...current,
        isOpen: false,
      };
    });
  };

  const collapseSidebar = () => {
    setSidebarStatus((current) => ({
      ...current,
      isCollapsed: !current.isCollapsed,
    }));
  };

  return (
    <appContext.Provider
      value={{
        sidebarStatus,
        openSidebar,
        closeSidebar,
        collapseSidebar,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(appContext) as AppContextValue;
};
