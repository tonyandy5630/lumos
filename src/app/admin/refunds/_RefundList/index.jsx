'use client'
import React, { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import Table from '@/components/Table'
import { getRefundListAPI } from '@/api/admin.api'
import RefundColumns from './column'

export default function RefundList() {
    const { data, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ['/refund-list'],
        queryFn: () => getRefundListAPI,
    })

    const rows = useMemo(() => {
        if (isSuccess) {
            const res = data?.data
            console.table(res)
            if (res) return res
            return []
        }
        return []
    }, [isSuccess])

    return (
        <div className="min-w-full">
            <Table
                rows={rows}
                columns={RefundColumns}
                isLoading={isLoading}
                isError={isError}
            />
        </div>
    )
}
