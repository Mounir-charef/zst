import { TypedOfferListing } from "../types/offer"
import products from "./products"

const offers: TypedOfferListing[] = [
    {
        id: 1,
        product: products[0],
        minPrice: 50,
        maxPrice: 120,
        minQuantity: 200,
        maxQuantity: 500,
        variations: 10,
        createdAt: '',
        updatedAt: '',
    }
]

export default offers