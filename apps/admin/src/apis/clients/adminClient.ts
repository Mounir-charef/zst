import admins from "../../data/admins"
import { TypedPaginationResponse } from "../../types/react-query"
import { TypedAdmin } from "../../types/user"
import API_ENDPOINTS from "../_api-endpoints"
import crudFactory from "./_crud-factory"

const adminClient = {
    ...crudFactory(API_ENDPOINTS.ADMINS),
    getAll() {
        return new Promise<TypedPaginationResponse<TypedAdmin>>(resolve => setTimeout(() => resolve({
            data: admins,
            total: 100
        }), 1000))
    },
}

export default adminClient