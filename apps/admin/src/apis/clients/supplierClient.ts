import suppliers from "../../data/suppliers"
import API_ENDPOINTS from "../_api-endpoints"
import crudFactory from "./_crud-factory"

const supplierClient = {
    ...crudFactory(API_ENDPOINTS.SUPPLIERS),
    getAll() {
        return new Promise(resolve => setTimeout(() => resolve(suppliers), 1000))
    }
}

export default supplierClient