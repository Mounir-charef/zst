import { IconType } from "react-icons";
import routesConfig from "../config/routesConfig";
import { RxDashboard, RxBadge } from "react-icons/rx";
import { PiPackageDuotone, PiShootingStarDuotone } from "react-icons/pi";
import { MdOutlineAdminPanelSettings, MdOutlineSell, MdOutlineWarehouse, MdOutlineFormatOverline, MdAdsClick } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaWpforms, FaTable } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";
import { SiDialogflow } from "react-icons/si";
import { BiCategory } from "react-icons/bi";


export interface SidebarLink {
  id: number;
  href: string;
  title: string;
  Icon?: IconType | null;
//   segment: string;
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

    orderManagement: {
        title: 'Order Management',
        links: [
            {
                id: 30,
                title: 'Orders',
                Icon: PiPackageDuotone,
                href: '#',
                children: [
                    {
                        id: 31,
                        title: 'All Orders',
                        href: routesConfig.orders
                    },
                    // {
                    //     id: 32,
                    //     title: 'Add New Order',
                    //     href: routesConfig.addNewProduct
                    // },
                ],
            },
            {
                id: 33,
                title: 'Offers',
                Icon: BiCategory,
                href: '#',
                children: [
                    {
                        id: 34,
                        title: 'All Offers',
                        href: routesConfig.offers
                    },
                    // {
                    //     id: 35,
                    //     title: 'Add New Category',
                    //     href: routesConfig.addNewCategory
                    // },
                ]
            },
            {
                id: 36,
                title: 'Auctions',
                Icon: PiShootingStarDuotone,
                href: '#',
                children: [
                    {
                        id: 37,
                        title: 'All Auctions',
                        href: routesConfig.auctions
                    },
                    // {
                    //     id: 38,
                    //     title: 'Add New Attribute',
                    //     href: routesConfig.addNewAttribute
                    // },
                ]
            },
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
                id: 27,
                title: 'Categories',
                Icon: BiCategory,
                href: '#',
                children: [
                    {
                        id: 28,
                        title: 'All Categories',
                        href: routesConfig.categories
                    },
                    {
                        id: 29,
                        title: 'Add New Category',
                        href: routesConfig.addNewCategory
                    },
                ]
            },
            {
                id: 5,
                title: 'Attributes',
                Icon: PiShootingStarDuotone,
                href: '#',
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
            },
        ]
    },

    userManagement: {
        title: 'User Management',
        links: [
            {
                id: 8,
                title: 'Admins',
                Icon: MdOutlineAdminPanelSettings,
                href: '#',
                children: [
                    {
                        id: 9,
                        title: 'All Admins',
                        href: routesConfig.admins
                    },
                    {
                        id: 10,
                        title: 'Add New Admin',
                        href: routesConfig.addNewAdmin
                    },
                ],
            },
            {
                id: 11,
                title: 'Sellers',
                Icon: MdOutlineSell,
                href: '#',
                children: [
                    {
                        id: 12,
                        title: 'All Sellers',
                        href: routesConfig.sellers
                    },
                    {
                        id: 13,
                        title: 'Add New Seller',
                        href: routesConfig.addNewSeller
                    },
                ]
            },
            {
                id: 14,
                title: 'Suppliers',
                Icon: MdOutlineWarehouse,
                href: '#',
                children: [
                    {
                        id: 15,
                        title: 'All Suppliers',
                        href: routesConfig.suppliers
                    },
                    {
                        id: 16,
                        title: 'Add New Supplier',
                        href: routesConfig.addNewSupplier
                    },
                ]
            },
            {
                id: 17,
                title: 'Clients',
                Icon: HiOutlineUsers,
                href: '#',
                children: [
                    {
                        id: 18,
                        title: 'All Clients',
                        href: routesConfig.clients
                    },
                    {
                        id: 19,
                        title: 'Add New Client',
                        href: routesConfig.addNewClient
                    },
                ]
            },
        ]
    },

    // examples: {
    //     title: 'Examples',
    //     links: [
    //         {
    //             id: 20,
    //             title: 'Form (Old Implementation)',
    //             Icon: FaWpforms,
    //             href: '/examples/form',
    //         },
    //         {
    //             id: 21,
    //             title: 'Listing',
    //             Icon: CiViewTable,
    //             href: '/examples/table',
    //         },
    //         {
    //             id: 22,
    //             title: 'Modal',
    //             Icon: SiDialogflow,
    //             href: '/examples/modal',
    //         },
    //         {
    //             id: 23,
    //             title: 'Badge',
    //             Icon: RxBadge,
    //             href: '/examples/badge',
    //         },
    //         {
    //             id: 24,
    //             title: 'Popover',
    //             Icon: MdOutlineFormatOverline,
    //             href: '/examples/popover',
    //         },
    //         {
    //             id: 25,
    //             title: 'Button',
    //             Icon: MdAdsClick,
    //             href: '/examples/button',
    //         },
    //         {
    //             id: 26,
    //             title: 'Table',
    //             Icon: FaTable,
    //             href: '/examples/table',
    //         },
    //     ]
    // },
}



export default sidebarLinks;
