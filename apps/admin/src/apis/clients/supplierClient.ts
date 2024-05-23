import suppliers from "../../data/suppliers"
import { TypedPaginationResponse } from "../../types/react-query"
import { TypedSupplier } from "../../types/user"
import API_ENDPOINTS from "../_api-endpoints"
import crudFactory from "./_crud-factory"

const supplierClient = {
    ...crudFactory(API_ENDPOINTS.SUPPLIERS),
    getAll() {
        return new Promise<TypedPaginationResponse<TypedSupplier>>(resolve => setTimeout(() => resolve({
            data: suppliers,
            total: 100
        }), 1000))
    }
}

export default supplierClient