import categories from "../../data/categories"
import { TypedCategoryListing } from "../../types/category"
import { ID } from "../../types/common"
import { TypedPaginationResponse } from "../../types/react-query"
import { findOne, requestBuilder } from "../_api-mock-helper"

const categoryClient = {
    getAll() {
        return new Promise<TypedPaginationResponse<TypedCategoryListing>>(resolve => setTimeout(() => resolve({
            data: categories,
            total: 100
        }), 1000))
    },
    getById(id: ID) {
        return requestBuilder(findOne(categories, id)).then(res => res.data)
    }
}

export default categoryClient