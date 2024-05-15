import { ID } from "./common";
import { FileResponse } from "./file";

export interface TypedProductListing {
    id: ID
    name: string
    type: string
    price: number
    qty: number
    image: FileResponse
}