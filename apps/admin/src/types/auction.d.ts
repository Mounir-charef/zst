import { BaseDataItem } from "./common";

export interface TypedAuction extends BaseDataItem {
    minPrice: number
    maxPrice: number
    minQuantity: number
    maxQuantity: number
    status: string,
    description: string,
}

export interface TypedAuctionListing extends TypedAuction {
}