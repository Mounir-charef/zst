import clients from "../../data/client"
import API_ENDPOINTS from "../_api-endpoints"
import crudFactory from "./_crud-factory"

const clientClient = {
    ...crudFactory(API_ENDPOINTS.CLIENTS),
    getAll() {
        return new Promise(resolve => setTimeout(() => resolve({
            data: clients,
            total: 100
        }), 1000))
    }
}

export default clientClient