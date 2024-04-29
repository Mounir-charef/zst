'use client'

import { useState } from "react"

export function useDisclosure(defaultState = false) {
    const [isOpen, setIsOpen] = useState(defaultState)

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)
    const toggle = () => setIsOpen(prev => !prev)

    return {
        isOpen,
        setIsOpen,
        onOpen,
        onClose,
        toggle
    }
}