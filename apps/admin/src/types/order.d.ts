import { BaseDataItem } from "./common";
import { TypedProductListing } from "./product";

export interface TypedOrderListing extends BaseDataItem {
    product: TypedProductListing
    date: string
    quantity: number
    price: number
    status: string
}