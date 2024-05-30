import { BaseDataItem } from "./common";
import { TypedProductListing } from "./product";

export interface TypedOfferListing extends BaseDataItem {
    product: TypedProductListing
    minPrice: number
    maxPrice: number
    minQuantity: number
    maxQuantity: number
    variations: number
}