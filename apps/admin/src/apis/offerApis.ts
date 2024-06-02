import { useQuery } from "@tanstack/react-query";
import API_ENDPOINTS from "./_api-endpoints";
import { SearchParams, getListQueryOptions } from "./_api-utils";
import offerClient from "./clients/offerClient";

export const getOffersQueryOptions = (searchParams: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.OFFERS, request: offerClient.getAll, searchParams })
}

export const useGetOffersQuery = (searchParams?: SearchParams) => {
    return useQuery({
        ...getOffersQueryOptions(searchParams)
    })
}