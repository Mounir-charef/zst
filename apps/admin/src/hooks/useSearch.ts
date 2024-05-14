"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "../navigation";
import useDebouncedValue from "./useDebouncedValue";


const debouncedDelay = 300

export default function useSearch() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const delay = useRef<number>(debouncedDelay)

    const [search, setSearch] = useState<{[prop: string]: string}>(
        Object.fromEntries(new URLSearchParams(searchParams))
    )
    const searchValues = useDebouncedValue({value: search, delay: delay.current}) as {[prop: string]: string}

    const handleSearch = (name: string, value: string, isDebounced: boolean = true) => {
        if (!isDebounced) {
            delay.current = 0
        } else {
            delay.current = debouncedDelay
        }
        setSearch((current) => ({
            ...current,
            [name]: value
        }))
    }

    useEffect(() => {
        const params = new URLSearchParams(searchValues);
        console.log({
            params,
            string: params.toString()
        })
        const paramsString = params.toString()
        window.history.pushState('', '', paramsString ? `?${paramsString}` : '')
        // replace(`${pathname}?${params.toString()}`);
    }, [pathname, searchValues])


    return {
        searchValues,
        search,
        handleSearch,
    }
    
}