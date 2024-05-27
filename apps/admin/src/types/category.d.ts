import { BaseDataItem } from "./common";
import { FileResponse } from "./file";

export interface TypedCategoryListing extends BaseDataItem {
    name: string
    description: string
    image: FileResponse
    parent: TypedCategoryListing | null
}