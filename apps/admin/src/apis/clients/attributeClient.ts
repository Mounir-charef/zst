import API_ENDPOINTS from "../_api-endpoints";
import crudFactory from "./_crud-factory";

const attributeClient = {
    ...crudFactory(API_ENDPOINTS.ATTRIBUTES)
}

export default attributeClient