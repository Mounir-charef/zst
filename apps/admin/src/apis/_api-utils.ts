export type SearchParams = unknown

interface GetListQueryOptionsArgs {
    endpoint: string, request: (searchParams?: SearchParams) => Promise<unknown>, searchParams?: SearchParams
}

export const getListQueryOptions = ({
    endpoint, request, searchParams
}: GetListQueryOptionsArgs) => {
    return {
        queryKey: [endpoint, searchParams],
        queryFn: () => request(searchParams),
    }
}