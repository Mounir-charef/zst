import { useQuery } from "@tanstack/react-query";
import { SearchParams, getListQueryOptions } from "./_api-utils";
import API_ENDPOINTS from "./_api-endpoints";
import sellerClient from "./clients/sellerClient";

export const getSellersQueryOptions = (searchParams?: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.SELLERS, request: sellerClient.getAll, searchParams })
}

export const useGetSellersQuery = (searchParams?: SearchParams) => {
    return useQuery({
        ...getSellersQueryOptions(searchParams)
    })
}