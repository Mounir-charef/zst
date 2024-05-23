import { useQuery } from "@tanstack/react-query";
import API_ENDPOINTS from "./_api-endpoints";
import { SearchParams, getListQueryOptions } from "./_api-utils";
import clientClient from "./clients/clientClient";

export const getClientsQueryOptions = (searchParams: SearchParams) => {
    return getListQueryOptions({endpoint: API_ENDPOINTS.CLIENTS, request: clientClient.getAll, searchParams})
}

export const useGetClientsQuery = (searchParams: SearchParams) => {
    return useQuery({
        ...getClientsQueryOptions(searchParams)
    })
}