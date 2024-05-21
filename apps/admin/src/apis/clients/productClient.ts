import products from "../../data/products"
import { TypedProductListing } from "../../types/product"
import { TypedPaginationResponse } from "../../types/react-query"

const productClient = {
    getAll() {
        return new Promise<TypedPaginationResponse<TypedProductListing>>(resolve => setTimeout(() => resolve({
            data: products,
            total: 100
        }), 1000))
    }
}

export default productClient