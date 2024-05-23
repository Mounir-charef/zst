import attributes from "../../data/attributes"
import { TypedAttributeListing } from "../../types/attribute"
import { TypedPaginationResponse } from "../../types/react-query"

const attributeClient = {
    getAll() {
        return new Promise<TypedPaginationResponse<TypedAttributeListing>>(resolve => setTimeout(() => resolve({
            data: attributes,
            total: 100
        }), 1000))
    }
}

export default attributeClient