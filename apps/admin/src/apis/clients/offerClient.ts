import offers from "../../data/offers"
import { TypedOfferListing } from "../../types/offer"
import { TypedPaginationResponse } from "../../types/react-query"

const offerClient = {
    getAll() {
        return new Promise<TypedPaginationResponse<TypedOfferListing>>(resolve => setTimeout(() => resolve({
            data: offers,
            total: 100
        }), 1000))
    },
}

export default offerClient