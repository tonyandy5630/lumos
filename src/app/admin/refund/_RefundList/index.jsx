'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Table from '@/components/Table'
import { getRefundListAPI } from '@/api/admin.api'
import RefundColumns from './column'

export default function RefundList() {
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ['/refund-list'],
        queryFn: getRefundListAPI,
        initialData: [],
    })

    return (
        <Table
            title="Refund list"
            rows={data}
            columns={RefundColumns}
            isLoading={isLoading}
            isError={isError}
        />
    )
}
