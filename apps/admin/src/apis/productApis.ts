import { useQuery } from "@tanstack/react-query"
import API_ENDPOINTS from "./_api-endpoints"
import { SearchParams, getDetailsQueryOptions, getListQueryOptions } from "./_api-utils"
import productClient from "./clients/productClient"
import { ID } from "../types/common"


// ! Helpers
export const getProductsQueryOptions = (searchParams?: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.PRODUCTS, request: productClient.getAll, searchParams })
}

export const getProductDetailsQueryOptions = (id: ID) => {
    return getDetailsQueryOptions({ request: productClient.getById, endpoint: API_ENDPOINTS.PRODUCTS, id })
}


// APIs
export const useGetProductsQuery = (searchParams?: SearchParams) => {
    return useQuery({
        ...getProductsQueryOptions(searchParams)
    })
}

export const useGetProductDetailsQuery = (id: ID) => {
    return useQuery({
        ...getProductDetailsQueryOptions(id)
    })
}