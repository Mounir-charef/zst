import { ProductListing } from "../types/product"

const products: ProductListing[] = [
    {
        id: 1,
        name: 'Apple',
        type: 'Simple',
        price: 20,
        qty: 89,
        image: {
            id: 1,
            url: '/images/products/apple.webp'
        }
    }
]

export default products