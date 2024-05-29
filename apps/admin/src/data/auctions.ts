import { TypedAuctionListing } from "../types/auction"

const auctions: TypedAuctionListing[] = [
    {
        id: 1,
        "minPrice": 100,
        "maxPrice": 200,
        "maxQuantity": 50,
        "minQuantity": 10,
        status: 'PENDING',
        description: 'Description of the auction',
        createdAt: '',
        updatedAt: '',
    }
]

export default auctions