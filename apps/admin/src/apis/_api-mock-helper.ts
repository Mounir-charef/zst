import { BaseDataItem, ID } from "../types/common";

export const findOne = <T extends BaseDataItem>(list: T[], id: ID) => list.find(item => item.id.toString() === id.toString())

export const requestBuilder = (data: unknown, extraArgs?: {[prop: string]:unknown}) => {
    return new Promise<{data: unknown}>(resolve => setTimeout(() => resolve({
        data,
        ...extraArgs
    }), 1000))
}

export const requestPaginationBuilder = (data: unknown[]) => {
    return new Promise(resolve => setTimeout(() => resolve({
        data,
        total: 100
    }), 1000))
}
