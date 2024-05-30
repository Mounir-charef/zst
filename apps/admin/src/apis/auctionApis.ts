import { useQuery } from "@tanstack/react-query"
import API_ENDPOINTS from "./_api-endpoints"
import { SearchParams, getListQueryOptions } from "./_api-utils"
import auctionClient from "./clients/auctionClient"

export const getAuctionsQueryOptions = (searchParams?: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.AUCTIONS, request: auctionClient.getAll, searchParams })
}

export const useGetAuctionsQuery = (searchParams?: SearchParams) => {
    return useQuery({
        ...getAuctionsQueryOptions(searchParams)
    })
}