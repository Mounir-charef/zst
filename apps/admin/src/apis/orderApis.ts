import { useQuery } from "@tanstack/react-query";
import API_ENDPOINTS from "./_api-endpoints";
import { SearchParams, getListQueryOptions } from "./_api-utils";
import orderClient from "./clients/orderClient";

export const getOrdersQueryOptions = (searchParams: SearchParams) => {
    return getListQueryOptions({ endpoint: API_ENDPOINTS.ORDERS, request: orderClient.getAll, searchParams })
}

export const useGetOrdersQuery = (searchParams?: SearchParams) => {
    return useQuery({
        ...getOrdersQueryOptions(searchParams)
    })
}