import orders from "../../data/orders"
import { TypedOrderListing } from "../../types/order"
import { TypedPaginationResponse } from "../../types/react-query"

const orderClient = {
    getAll() {
        return new Promise<TypedPaginationResponse<TypedOrderListing>>(resolve => setTimeout(() => resolve({
            data: orders,
            total: 100
        }), 1000))
    },
}

export default orderClient