import { useQuery } from "@tanstack/react-query"
import API_ENDPOINTS from "./_api-endpoints"
import userClient from "./clients/userClient"

export const getUserQueryOptions = (searchParams: unknown = {}) => {
    return {
        queryKey: [API_ENDPOINTS.USERS, searchParams],
        queryFn: () => userClient.getAll(searchParams),
    }
}

export const useGetUsersQuery = (searchParams?: unknown) => {
    const query = useQuery({
        ...getUserQueryOptions(searchParams),
    })
    return query
}