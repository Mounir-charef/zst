import { UseQueryResult } from "@tanstack/react-query";

export type TypedUseQuery<T> = () => UseQueryResult<T>

export type TypedUseQueryListing<T = unknown> = (searchParams?: unknown) => UseQueryResult<T>

export type TypedResponse<T> = {
    data: T
}

export type TypedItemResponse<T> = {
    data: T
}

export type TypedListResponse<T> = {
    data: T[]
}

export type TypedPaginationResponse<T> = {
    data: T[]
    total: number
}