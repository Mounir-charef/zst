'use client'

import { useState } from "react";
import { ID } from "../types/common";

export default function useSelectRows() {
    const [selectedRows, setSelectedRows] = useState<ID[]>([]);
    return {
        selectedRows,
        setSelectedRows
    }
}