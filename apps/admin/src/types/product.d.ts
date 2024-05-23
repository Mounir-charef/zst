import { BaseDataItem, ID } from "./common";
import { FileResponse } from "./file";

export interface TypedProductListing extends BaseDataItem {
    name: string
    type: string
    price: number
    qty: number
    image: FileResponse
}