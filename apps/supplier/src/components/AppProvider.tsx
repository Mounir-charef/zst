'use client';

import { createContext, useCallback, useContext, useState } from 'react';

export type SidebarStatus = 'open' | 'collapsed';

interface AppContextValue {
  sidebarStatus: SidebarStatus;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const appContext = createContext<AppContextValue>({} as AppContextValue);

const AppProvider = ({
  children,
  defaultOpen = 'collapsed',
}: {
  children: React.ReactNode;
  defaultOpen?: SidebarStatus;
}) => {
  const [sidebarStatus, setSidebarStatus] =
    useState<SidebarStatus>(defaultOpen);

  const openSidebar = useCallback(() => {
    setSidebarStatus('open');
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarStatus('collapsed');
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarStatus((status) => (status === 'open' ? 'collapsed' : 'open'));
  }, []);

  return (
    <appContext.Provider
      value={{
        sidebarStatus,
        openSidebar,
        closeSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};

export { useAppContext, AppProvider };
