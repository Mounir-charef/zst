import { useQuery } from "@tanstack/react-query";
import API_ENDPOINTS from "./_api-endpoints";
import { SearchParams, getListQueryOptions } from "./_api-utils";
import attributeClient from "./clients/attributeClient";

export const getAttributesQueryOptions = (searchParams?: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.ATTRIBUTES, request: attributeClient.getAll, searchParams })
}

export const useGetAttributesQuery = (searchParams?: SearchParams) => {
    return useQuery({
        ...getAttributesQueryOptions(searchParams)
    })
}