import { FileUploaderItemType } from "../types/file-uploader"

const transformFileToObject = (file: File): FileUploaderItemType => {
    return {
        id: null,
        file,
        name: file.name,
        url: URL.createObjectURL(file)
    }
}

export {
    transformFileToObject
}