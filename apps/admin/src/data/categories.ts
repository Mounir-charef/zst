import { TypedCategoryListing } from "../types/category"

const categories: TypedCategoryListing[] = [
    {
        id: 1,
        name: 'Fruits',
        description: 'a good category',
        parent: {
            id: 1,
            name: 'Food',
            description: '',
            parent: null,
            image: {
                id: 1,
                path: '/images/products/apple.webp',
                url: '/images/products/apple.webp'
            },
            createdAt: '',
            updatedAt: '',
        },
        image: {
            id: 1,
            path: '/images/products/apple.webp',
            url: '/images/products/apple.webp'
        },
        createdAt: '',
        updatedAt: '',
    }
]

export default categories