import { IconType } from "react-icons";
import { RxDashboard } from "react-icons/rx";
import { PiPackageDuotone } from "react-icons/pi";
import routesConfig from "../config/routesConfig";

export interface SidebarLink {
    id: number;
    href: string;
    title: string;
    Icon?: IconType | null;
    // segment?: string;
    children?: SidebarLink[];
}

interface SidebarLinks {
    [property: string]: {
      title: string;
      links: SidebarLink[];
    };
  }

const sidebarLinks: SidebarLinks = {
    main: {
        title: 'Main',
        links: [
            {
                id: 1,
                title: 'Dashboard',
                Icon: RxDashboard,
                href: routesConfig.dashboard,
                children: [],
            }
        ]
    },
    productManagement: {
        title: 'Product Management',
        links: [
            {
                id: 2,
                title: 'Products',
                Icon: PiPackageDuotone,
                href: '#',
                children: [
                    {
                        id: 3,
                        title: 'All Products',
                        href: routesConfig.products
                    },
                    {
                        id: 4,
                        title: 'Add New Product',
                        href: routesConfig.addNewProduct
                    },
                ],
            }
        ]
    }
    

}

export default sidebarLinks