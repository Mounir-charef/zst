import { TypedClient } from './../../types/user.d';
import clients from "../../data/client"
import { TypedPaginationResponse } from "../../types/react-query"
import API_ENDPOINTS from "../_api-endpoints"
import crudFactory from "./_crud-factory"

const clientClient = {
    ...crudFactory(API_ENDPOINTS.CLIENTS),
    getAll() {
        return new Promise<TypedPaginationResponse<TypedClient>>(resolve => setTimeout(() => resolve({
            data: clients,
            total: 100
        }), 1000))
    }
}

// const x: TypedPaginationResponse = {}

export default clientClient