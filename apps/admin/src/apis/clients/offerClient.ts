import offers from "../../data/offers"
import { TypedOrderListing } from "../../types/order"
import { TypedPaginationResponse } from "../../types/react-query"

const offerClient = {
    getAll() {
        return new Promise<TypedPaginationResponse<TypedOrderListing>>(resolve => setTimeout(() => resolve({
            data: offers,
            total: 100
        }), 1000))
    },
}

export default offerClient