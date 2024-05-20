import { useQuery } from "@tanstack/react-query"
import API_ENDPOINTS from "./_api-endpoints"
import { SearchParams, getListQueryOptions } from "./_api-utils"
import supplierClient from "./clients/supplierClient"

export const getSuppliersQueryOptions = (searchParams?: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.SUPPLIERS, request: supplierClient.getAll, searchParams })
}


export const useGetSuppliersQuery = (searchParams: SearchParams) => {
    return useQuery({
        ...getSuppliersQueryOptions(searchParams)
    })
}