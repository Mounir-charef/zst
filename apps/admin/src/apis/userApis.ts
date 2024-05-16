import { useQuery } from "@tanstack/react-query"
import API_ENDPOINTS from "./_api-endpoints"
import userClient from "./clients/userClient"
import { SearchParams, getListQueryOptions } from "./_api-utils"

export const getUsersQueryOptions = (searchParams?: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.USERS, request: userClient.getAll, searchParams })
}

export const useGetUsersQuery = (searchParams?: unknown) => {
    return useQuery({
        ...getUsersQueryOptions(searchParams),
    })
}