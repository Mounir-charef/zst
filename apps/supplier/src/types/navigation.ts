export type NavigationLink = {
  type: 'link';
  title: string;
  href: string;
  icon: React.ReactNode;
};
export type NavigationMenu = {
  type: 'menu';
  title: string;
  icon: React.ReactNode;
  children: {
    title: string;
    href: string;
    description: string;
  }[];
};

export type NavigationItem = NavigationLink | NavigationMenu;
