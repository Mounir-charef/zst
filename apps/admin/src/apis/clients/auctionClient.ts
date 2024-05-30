import auctions from "../../data/auctions"
import { TypedAuctionListing } from "../../types/auction"
import { TypedPaginationResponse } from "../../types/react-query"

const auctionClient = {
    getAll() {
        return new Promise<TypedPaginationResponse<TypedAuctionListing>>(resolve => setTimeout(() => resolve({
            data: auctions,
            total: 100
        }), 1000))
    },
}

export default auctionClient