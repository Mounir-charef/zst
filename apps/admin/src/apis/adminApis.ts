import { useQuery } from "@tanstack/react-query";
import API_ENDPOINTS from "./_api-endpoints";
import { SearchParams, getListQueryOptions } from "./_api-utils";
import adminClient from "./clients/adminClient";

export const getAdminsQueryOptions = (searchParams?: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.ADMINS, request: adminClient.getAll, searchParams })
}


export const useGetAdminsQuery = (searchParams?: SearchParams) => {
    return useQuery({
        ...getAdminsQueryOptions(searchParams)
    })
}