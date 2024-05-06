import { ID } from "./common";

export interface FileUploaderItemType {
    id: ID | null
    name: string
    url: string
    file: File
}