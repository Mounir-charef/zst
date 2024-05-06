import { ID } from "../types/common"

const routesConfig = {
    dashboard: '/',

    products: '/products',
    addNewProduct: '/products/create',
    editProduct: (id: ID) => `/products/${id}/edit`,

    attributes: '/attributes',
    addNewAttribute: '/attributes/create',
}

export default routesConfig