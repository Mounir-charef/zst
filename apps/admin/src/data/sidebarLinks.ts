import { IconType } from "react-icons";
import { RxDashboard } from "react-icons/rx";
import { PiPackageDuotone } from "react-icons/pi";
import { PiShootingStarDuotone } from "react-icons/pi";
import routesConfig from "../config/routesConfig";
import { FaWpforms, FaTable } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import { SiDialogflow } from "react-icons/si";
import { RxBadge } from "react-icons/rx";
import { MdOutlineFormatOverline } from "react-icons/md";
import { MdAdsClick } from "react-icons/md";


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
            },
            {
                id: 5,
                title: 'Attributes',
                Icon: PiShootingStarDuotone,
                href: routesConfig.attributes,
                children: [
                    {
                        id: 6,
                        title: 'All Attributes',
                        href: routesConfig.attributes
                    },
                    {
                        id: 7,
                        title: 'Add New Attribute',
                        href: routesConfig.addNewAttribute
                    },
                ]
            }
        ]
    },

    examples: {
        title: 'Examples',
        links: [
            {
                id: 8,
                title: 'Form',
                Icon: FaWpforms,
                href: '/examples/form',
            },
            {
                id: 9,
                title: 'Listing',
                Icon: CiViewTable,
                href: '/examples/listing',
            },
            {
                id: 10,
                title: 'Modal',
                Icon: SiDialogflow,
                href: '/examples/modal',
            },
            {
                id: 11,
                title: 'Badge',
                Icon: RxBadge,
                href: '/examples/badge',
            },
            {
                id: 12,
                title: 'Popover',
                Icon: MdOutlineFormatOverline,
                href: '/examples/popover',
            },
            {
                id: 13,
                title: 'Button',
                Icon: MdAdsClick,
                href: '/examples/button',
            },
            {
              id: 10,
              title: 'Client/Store Table',
              Icon: FaTable,
              href: '/examples/table',
            },
        ]
    },
}



export default sidebarLinks;
