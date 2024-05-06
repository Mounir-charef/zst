import { FileUploaderItemType } from "../types/file-uploader"

const transformFileToObject = (file: File): FileUploaderItemType => {
    return {
        id: null,
        file: File,
        name: file.name,
        url: URL.createObjectURL(file)
    }
}

export {
    transformFileToObject
}