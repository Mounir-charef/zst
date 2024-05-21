export type SearchParams = unknown

interface GetListQueryOptionsArgs<T> {
    endpoint: string, request: (searchParams?: SearchParams) => Promise<T>, searchParams?: SearchParams
}

export const getListQueryOptions = <T,>({
    endpoint, request, searchParams
}: GetListQueryOptionsArgs<T>) => {
    return {
        queryKey: [endpoint, searchParams],
        queryFn: () => request(searchParams),
    }
}