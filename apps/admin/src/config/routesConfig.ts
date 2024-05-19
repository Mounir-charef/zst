import { ID } from "../types/common"

const routesConfig = {
    dashboard: '/',

    products: '/products',
    addNewProduct: '/products/create',
    editProduct: (id: ID) => `/products/${id}/edit`,

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