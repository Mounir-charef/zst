'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export type SidebarStatus = 'open' | 'collapsed';

interface AppContextValue {
  sidebarStatus: SidebarStatus;
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
}

const appContext = createContext<AppContextValue>({} as AppContextValue);

const AppProvider = ({
  children,
  defaultStatus = 'collapsed',
}: {
  children: React.ReactNode;
  defaultStatus?: SidebarStatus;
}) => {
  const [sidebarStatus, setSidebarStatus] =
    useState<SidebarStatus>(defaultStatus);

  const isOpen = useMemo(() => sidebarStatus === 'open', [sidebarStatus]);

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
        isOpen,
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
