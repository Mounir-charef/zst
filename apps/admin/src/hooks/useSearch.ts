"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "../navigation";
import useDebouncedValue from "./useDebouncedValue";
import cleanObject from "../utils/cleanObject";

const debouncedDelay = 400

export interface TypedSearch {
    [prop: string]: string
}

export type HandleSearch = (name: string, value: string, isDebounced?: boolean) => void

export default function useSearch() {
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const delay = useRef<number>(debouncedDelay)

    const [search, setSearch] = useState<TypedSearch>(
        Object.fromEntries(new URLSearchParams(searchParams))
    )
    const searchValues = useDebouncedValue({value: search, delay: delay.current}) as TypedSearch

    const handleSearch = (name: string, value: string, isDebounced: boolean = true) => {
        if (!isDebounced) {
            delay.current = 0
        } else {
            delay.current = debouncedDelay
        }
        setSearch((current) => {
            return {
                ...current,
                [name]: value
            }
        })
    }

    useEffect(() => {
        cleanObject(searchValues)
        const params = new URLSearchParams(searchValues);
        const paramsString = params.toString()
        window.history.pushState('', '', paramsString ? `?${paramsString}` : '')
    }, [pathname, searchValues])


    return {
        searchValues,
        search,
        handleSearch,
    }
    
}