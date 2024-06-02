import { BaseDataItem, ID } from "./common";
import { FileResponse } from "./file";
import { TypedStatus } from "./status";

export interface TypedProductListing extends BaseDataItem {
    name: string
    type: string
    price: number
    status: TypedStatus
    qty: number
    image: FileResponse
}