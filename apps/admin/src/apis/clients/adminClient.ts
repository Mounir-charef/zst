import admins from "../../data/admins"
import API_ENDPOINTS from "../_api-endpoints"
import crudFactory from "./_crud-factory"

const adminClient = {
    ...crudFactory(API_ENDPOINTS.ADMINS),
    getAll() {
        return new Promise(resolve => setTimeout(() => resolve(admins), 1000))
    },
}

export default adminClient