import { UseQueryResult } from "@tanstack/react-query";

export type TypedUseQuery = () => UseQueryResult

export type TypedUseQueryListing = (searchParams?: unknown) => UseQueryResult