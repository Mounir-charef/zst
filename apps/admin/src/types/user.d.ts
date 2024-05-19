import { BaseDataItem } from "./common";

export interface TypedUser extends BaseDataItem {
    username: string
    email: string
    phoneNumber: string
}

export interface TypedAdmin extends TypedUser {}