import { useQuery } from "@tanstack/react-query"
import API_ENDPOINTS from "./_api-endpoints"
import { SearchParams, getListQueryOptions } from "./_api-utils"
import productClient from "./clients/productClient"

export const getProductsQueryOptions = (searchParams?: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.PRODUCTS, request: productClient.getAll, searchParams })
}

export const useGetProductsQuery = (searchParams?: SearchParams) => {
    return useQuery({
        ...getProductsQueryOptions(searchParams)
    })
}