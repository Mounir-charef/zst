import { ID } from "../types/common"

export type SearchParams = unknown

interface GetListQueryOptionsArgs<T> {
    endpoint: string, request: (searchParams?: SearchParams) => Promise<T>, searchParams?: SearchParams
}

export const getListQueryOptions = <T,>({
    request, endpoint, searchParams
}: GetListQueryOptionsArgs<T>) => {
    return {
        queryKey: [endpoint, searchParams],
        queryFn: () => request(searchParams),
    }
}

interface GetDetailsQueryOptionsArgs<T> {
    endpoint: string, request: (id: ID) => Promise<T>, id: ID
}

export const getDetailsQueryOptions = <T,>({ request, endpoint, id }: GetDetailsQueryOptionsArgs<T>) => {
    return {
        queryKey: [endpoint, { id }],
        queryFn: () => request(id),
    }
}