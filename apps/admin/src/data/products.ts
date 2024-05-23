import { TypedProductListing } from "../types/product"

const products: TypedProductListing[] = [
    {
        id: 1,
        name: 'Apple',
        type: 'Simple',
        price: 20,
        qty: 89,
        image: {
            id: 1,
            url: '/images/products/apple.webp'
        },
        createdAt: '',
        updatedAt: ''
    }
]

export default products