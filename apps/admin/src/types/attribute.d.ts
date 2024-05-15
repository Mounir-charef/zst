import { ID } from "./common";

export interface AttributeValue {
    id: ID
    value: string
}

export interface TypedAttributeListing {
    id: ID
    name: string
    slug: string
    values: AttributeValue[]
}