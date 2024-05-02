'use client'

import { useMemo } from "react";
import range from "../utils/range";

export interface UsePaginationArgs {
    totalPages: number
    siblingCount?: number,
    currentPage: number
}

export default function usePagination({ currentPage, totalPages, siblingCount = 1 }: UsePaginationArgs) {
    const paginationRange = useMemo(() => {
        
        const totalPageCount = totalPages
        const totalPageNumber = siblingCount + 5;

        if (totalPageNumber >= totalPageCount) {
            return range(1, totalPageCount)
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

        const shouldShowLeftDots = leftSiblingIndex > 2
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

        if (shouldShowRightDots && !shouldShowLeftDots) {
            const leftItemCount = 3 + 2 * siblingCount
            const leftRange = range(1, leftItemCount)
            return [
                ...leftRange,
                '...',
                totalPageCount
            ]
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount
            const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)

            return [1, '...', ...rightRange]
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [
                1,
                '...',
                ...middleRange,
                '...',
                totalPageCount
            ]
        }

        return []
         
     }, [siblingCount, currentPage]);
   
     return paginationRange;
}