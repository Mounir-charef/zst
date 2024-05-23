import { BaseDataItem, ID } from "./common";

export interface AttributeValue {
    id: ID
    value: string
}

export interface TypedAttributeListing extends BaseDataItem {
    name: string
    slug: string
    values: AttributeValue[]
}