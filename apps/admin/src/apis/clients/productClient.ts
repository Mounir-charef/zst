import products from "../../data/products"
import { ID } from "../../types/common"
import { TypedProductListing } from "../../types/product"
import { TypedPaginationResponse } from "../../types/react-query"
import { findOne, requestBuilder } from "../_api-mock-helper"

const productClient = {
    getAll() {
        return new Promise<TypedPaginationResponse<TypedProductListing>>(resolve => setTimeout(() => resolve({
            data: products,
            total: 100
        }), 1000))
    },
    getById(id: ID) {
        return requestBuilder(findOne(products, id)).then(res => res.data)
    },
}

export default productClient