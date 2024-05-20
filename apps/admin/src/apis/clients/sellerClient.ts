
import sellers from "../../data/sellers"
import API_ENDPOINTS from "../_api-endpoints"
import crudFactory from "./_crud-factory"

const sellerClient = {
    ...crudFactory(API_ENDPOINTS.SELLERS),
    getAll() {
        return new Promise(resolve => setTimeout(() => resolve(sellers), 1000))
    }
}

export default sellerClient