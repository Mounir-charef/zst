"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "../navigation";
import useDebouncedValue from "./useDebouncedValue";

export default function useSearch() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const delay = useRef<number>(400)

    const [search, setSearch] = useState({})

    const searchValues = useDebouncedValue({value: search, delay: delay.current || 400})

    const handleSearch = (name: string, value: string) => {
        setSearch((current) => ({
            ...current,
            [name]: value
        }))
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        Object.keys(searchValues).forEach(searchValueKey => {
            // params.append()
        })
        replace(`${pathname}?${params.toString()}`);
    }, [searchValues])


    return {
        searchValues,
        search,
        handleSearch,
    }
    
}