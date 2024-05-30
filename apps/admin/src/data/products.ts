import { TypedProductListing } from "../types/product"
import { statusesKeys } from "./statuses"

const products: TypedProductListing[] = [
    {
        id: 1,
        name: 'Apple',
        type: 'Simple',
        status: statusesKeys.ACTIVE,
        price: 20,
        qty: 89,
        image: {
            id: 1,
            path: '/images/products/apple.webp',
            url: '/images/products/apple.webp'
        },
        createdAt: '',
        updatedAt: ''
    },
    {
        id: 2,
        name: 'Fruits',
        type: 'Simple',
        status: statusesKeys.INACTIVE,
        price: 50,
        qty: 23,
        image: {
            id: 1,
            path: '/images/products/apple.webp',
            url: '/images/products/apple.webp'
        },
        createdAt: '',
        updatedAt: ''
    },
]

export default products