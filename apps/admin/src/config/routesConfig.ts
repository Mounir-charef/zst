import { ID } from "../types/common"

const routesConfig = {
    dashboard: '/',

    orders: '/orders',
    offers: '/offers',
    auctions: '/auctions',

    products: '/products',
    addNewProduct: '/products/create',
    editProduct: (id: ID) => `/products/${id}/edit`,

    categories: '/categories',
    addNewCategory: '/categories/create',
    editCategory: (id: ID) => `/categories/${id}/edit`,

    attributes: '/attributes',
    addNewAttribute: '/attributes/create',
    editAttribute: (id: ID) => `/attributes/${id}/edit`,

    admins: '/admins',
    addNewAdmin: '/admins/create',

    sellers: '/sellers',
    addNewSeller: '/sellers/create',

    suppliers: '/suppliers',
    addNewSupplier: '/suppliers/create',
    
    clients: '/clients',
    addNewClient: '/clients/create'
}

export default routesConfig