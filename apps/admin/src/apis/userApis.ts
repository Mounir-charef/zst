import { useQuery } from "@tanstack/react-query"
import API_ENDPOINTS from "./_api-endpoints"
import userClient from "./clients/userClient"

export const getUserQueryOptions = {
    queryKey: [API_ENDPOINTS.USERS],
    queryFn: () => userClient.getAll()
}

export const useGetUsersQuery = () => {
    const query = useQuery({
        ...getUserQueryOptions
    })
    return query
}