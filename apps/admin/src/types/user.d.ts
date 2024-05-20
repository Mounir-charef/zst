import { BaseDataItem } from "./common";

export interface TypedUser extends BaseDataItem {
    username: string
    email: string
    phoneNumber: string
}

export interface TypedAdmin extends TypedUser {}

export interface TypedSeller extends TypedUser {}

export interface TypedSupplier extends TypedUser {}

export interface TypedClient extends TypedUser {}