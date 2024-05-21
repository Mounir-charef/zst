
import sellers from "../../data/sellers"
import { TypedPaginationResponse } from "../../types/react-query"
import { TypedSeller } from "../../types/user"
import API_ENDPOINTS from "../_api-endpoints"
import crudFactory from "./_crud-factory"

const sellerClient = {
    ...crudFactory(API_ENDPOINTS.SELLERS),
    getAll() {
        return new Promise<TypedPaginationResponse<TypedSeller>>(resolve => setTimeout(() => resolve({
            data: sellers,
            total: 100
        }), 1000))
    }
}

export default sellerClient