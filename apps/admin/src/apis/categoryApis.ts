import { useQuery } from "@tanstack/react-query"
import API_ENDPOINTS from "./_api-endpoints"
import { SearchParams, getDetailsQueryOptions, getListQueryOptions } from "./_api-utils"
import categoryClient from "./clients/categoryClient"
import { ID } from "../types/common"

export const getCategoriesOptionsQuery = (searchParams?: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.CATEGORIES, request: categoryClient.getAll, searchParams })
}

export const getCategoryDetailsQueryOptions = (id: ID) => {
    return getDetailsQueryOptions({ request: categoryClient.getById, endpoint: API_ENDPOINTS.PRODUCTS, id })
}


export const useGetCategoriesQuery = (searchParams?: SearchParams) => {
    return useQuery({
        ...getCategoriesOptionsQuery(searchParams)
    })
}

export const useGetCategoryDetailsQuery = (id: ID) => {
    return useQuery({
        ...getCategoryDetailsQueryOptions(id)
    })
}